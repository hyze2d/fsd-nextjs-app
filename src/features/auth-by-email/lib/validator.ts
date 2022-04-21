import { object, string } from 'yup';

function isCredentialsValid<T extends object>(
  credentials: T | undefined
): credentials is NonNullable<T> {
  return object({
    phone: string().required(),
    password: string().required()
  }).isValidSync(credentials);
}

export { isCredentialsValid };
