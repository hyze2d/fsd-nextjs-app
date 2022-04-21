import { CurrentUserContract, Tokens } from '@shared/api';
import 'next-auth';

declare module 'next-auth' {
  type CustomToken = {
    user: CurrentUserContract;
    tokens: Tokens;
  };

  interface User extends CustomToken {}

  interface Session extends User {}

  interface JWT extends CustomToken {}
}
