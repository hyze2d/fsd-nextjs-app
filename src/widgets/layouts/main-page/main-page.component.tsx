import { useStore } from 'effector-react';
import Link from 'next/link';
import type { PropsWithChildren } from 'react';
import { $$user } from '@entities/user';

// const MainPage = createView<PropsWithChildren<{}>>()
//   .props({
//     user: $$user.user
//   })

//   .view(({ user, children }) => (
//     <>
//       <header>
//         {user && (
//           <div>
//             <span>
//               {user.firstName} {user.lastName}
//             </span>
//           </div>
//         )}
//       </header>

//       <main>{children}</main>

//       <footer>main page footer</footer>
//     </>
//   ));

// // @ts-expect-error nopeee
// MainPage.started = $$user.getUserFx;

const MainPage = ({ children }: PropsWithChildren<{}>) => {
  const user = useStore($$user.user);

  return (
    <>
      <header>
        <div>
          <Link href='/'>Home</Link>

          <Link href='/test'>Test</Link>
        </div>

        {user && (
          <div>
            <span>
              {user.firstName} {user.lastName}
            </span>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer>main page footer</footer>
    </>
  );
};

MainPage.started = $$user.getUserFx;

export { MainPage };
