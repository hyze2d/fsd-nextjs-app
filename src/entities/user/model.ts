import { createEffect, createStore } from 'effector';

type User = {
  id: number;
  name: string;
};

const getUserFx = createEffect<void, User>();

const $user = createStore<User | null>(null);

getUserFx.use(async () => ({
  id: 123,
  name: 'User Name'
}));

$user.on(getUserFx.doneData, (_, user) => user);

export { $user, getUserFx };
