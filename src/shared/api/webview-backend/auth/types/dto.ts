type LoginDto = {
  email: string;
  password: string;
};

type RefreshDto = {
  refreshToken: string;
};

export type { LoginDto, RefreshDto };
