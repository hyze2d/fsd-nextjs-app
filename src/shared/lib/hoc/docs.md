Example:

```tsx
import {useEffect} from "react";
import {hoc} from "./hoc";

type ComponentProps = {
    foo: string;
    bar: number;
};

const useComponentProps = ({ bar }: ComponentProps) => {
    //..some react logic

    return {
      skipRender: bar === 10
    };
}


const Component = hoc(
    //hook
    useComponentProps,
    
    // render fn
    ({ foo, skipRender }) => {
        if (skipRender) return null;

        return <main>{foo}</main>;
    },

    // default props
    {
        foo: 'Hello world'
    } 
);

// Default usage
<Component bar={5} />;

// Default usage, wrapped with React.memo()
<Component.Memo bar={5} />;

// Usage only render fn (without defaultProps)
// Usecases: tests, storybook
<Component.Original
  bar={5}
  foo='Hello'
  skipRender={false}
/>

// Usage hook provided in hoc(hook,renderFn);
// Usecases: tests
const useComponentHook = Component.hook
useComponentHook(mockProps);
```

Example(with ref):

```tsx
import {ForwardedRef, useEffect, useRef} from "react";
import {hocWithRef, isForwardedRef} from "./ref";

type ComponentProps = {
    foo: string;
    bar: number;
};

const useComponentProps = ({bar}: ComponentProps, ref: ForwardedRef<HTMLButtonElement>) => {
    //..some react logic

    useEffect(() => {
        if (isForwardedRef(ref)) {
            console.log(ref.current.getBoundingClientRect());
        }
    }, [])

    return {
        skipRender: bar === 10
    };
}


const Component = hocWithRef(
    //hook
    useComponentProps,

    // render fn
    ({foo, skipRender}, ref) => {
        if (skipRender) return null;

        return <button ref={ref}>{foo}</button>;
    },

    // default props
    {
        foo: 'Hello world'
    }
);

// Default usage
// ref is optional
<Component ref={useRef<HTMLButtonElement>(null)} bar={5}/>;

// Default usage, wrapped with React.memo()
// ref is optional
<Component.Memo bar={5}/>;

// Usage only render fn (without defaultProps)
// ref is optional
// Usecases: tests, storybook
<Component.Original
    bar={5}
    foo='Hello'
    skipRender={false}
/>

// Usage hook provided in hoc(hook,renderFn);
// Usecases: tests
const useComponentHook = Component.hook;
useComponentHook(mockProps,mockRef);    
```

