declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_API_URL: string;

    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    JWT_SIGNING_PRIVATE_KEY: string;
  }
}
