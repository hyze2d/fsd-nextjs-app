import type { ErrorPayload } from '@shared/lib/boundry';

const AppCrashed = ({ meta }: ErrorPayload) => {
  console.log(meta);

  return <div>Ooops! error happened</div>;
};

export { AppCrashed };
