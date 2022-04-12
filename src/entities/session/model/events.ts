import { createEvent } from 'effector';

const getUser = createEvent();
const setToken = createEvent<string>();
const setTokenFromHttp = createEvent<string>();

export { getUser, setToken, setTokenFromHttp };
