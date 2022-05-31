import { createEvent, createStore } from 'effector';

const hoped = createEvent();

const $greeting = createStore('').on(hoped, () => 'Oh hi mark');

export { hoped, $greeting };
