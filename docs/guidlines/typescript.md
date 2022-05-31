# Typescript

Typescript is highly recommended to be used ( and already is in template ).

There are a certain set of rules set in Eslint and Typescript configuration to ensure that some common things are prevented while code is being written ( some of those rules are needed to ensure that code is gonna be maintainable and some are just stylistic choices you can alter if you want but overall it should be fine ).

Recommendations

Be sure to describe types where it possible, dont abuse uknown/any (you can turn linter rules for some cases but it's usually not needed in everyday's kind of code )

It's purely stylistic choice but try to avoid using interface for describing of types.
For our own projects we use type alias to describe types because they're cannot be extended like it works with interfaces in another files w/o creation of new types what can cause certain problems in maintaining and understanding where type's described and where it comes from. Interfaces are not prohibited tho, you can use them for describing contracts which should be implemented by classes like:

```
interface ICloneable<T> {
    clone() : T ;
}

class User implements ICloneable<User> {
    // ...
}
```

Dont forget to name them with "I" prefix to clearly mark that this type is interface. 

Where it's possible let typescript to handle creation of types instead of describing them manually until it's really needed (for example: do not describe function return type if typescript can catch it automatically ).

Types can be placed in files where they're used or you can put them in separate files and then import later if there are too much in the file where they're needed already.
