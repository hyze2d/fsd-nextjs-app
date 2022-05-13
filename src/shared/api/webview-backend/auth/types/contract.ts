type Tokens = {
  accessToken: string;
  refreshToken: string;
};

type LoginContract = Tokens;

type RefreshContract = Tokens;

export type { LoginContract, RefreshContract, Tokens };
