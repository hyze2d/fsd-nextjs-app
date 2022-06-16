import { createEvent, createStore } from 'effector';

const isEqualKeys = (a: Record<string, unknown>, b: Record<string, unknown>) =>
  Object.keys(a).every(key => a[key] == b[key]);

const defaultState = {
  altKey: false,
  ctrlKey: false,
  shiftKey: false,
  metaKey: false
};

const keydown = createEvent<KeyboardEvent>();

const keypress = createEvent<KeyboardEvent>();

const keyup = createEvent<KeyboardEvent>();

const resize = createEvent<UIEvent>();

const click = createEvent<MouseEvent>();

const mousedown = createEvent<MouseEvent>();

const mouseup = createEvent<MouseEvent>();

const $dimensions = createStore({
  width: window.innerWidth,
  height: window.innerHeight
}).on(resize, () => ({
  width: window.innerWidth,
  height: window.innerHeight
}));

const $keyboardState = createStore<{
  keys: string[];
  meta: typeof defaultState;
}>({
  keys: [],
  meta: defaultState
}).on([keydown, keyup], ({ keys }, event) => {
  let _keys = keys;
  let includes = _keys.includes(event.code);

  if (event.type == 'keydown') {
    _keys = includes ? _keys : [..._keys, event.code];
  }

  if (event.type == 'keyup' && includes) {
    _keys = _keys.filter(item => item != event.code);
  }

  return {
    keys: _keys,

    meta: {
      altKey: event.altKey,
      ctrlKey: event.ctrlKey,
      shiftKey: event.shiftKey,
      metaKey: event.metaKey
    }
  };
});

const $isLcmPressed = createStore(false)
  .on(mousedown, () => true)
  .reset(mouseup);

const isKeyDown = (
  code: string | string[],
  meta?: Partial<typeof defaultState>
) =>
  $keyboardState.map(({ keys, meta: metaState }) =>
    Array.isArray(code)
      ? code.every(item => keys.includes(item))
      : keys.includes(code) && (!meta || isEqualKeys(meta, metaState))
  );

if (typeof window != 'undefined') {
  document.addEventListener('keydown', keydown);
  document.addEventListener('keyup', keyup);
  document.addEventListener('keypress', keypress);
  document.addEventListener('click', click);
  document.addEventListener('mousedown', mousedown);
  document.addEventListener('mouseup', mouseup);

  window.addEventListener('resize', resize);
}

export {
  $dimensions,
  $isLcmPressed,
  click,
  keyup,
  resize,
  keydown,
  mouseup,
  keypress,
  mousedown,
  isKeyDown
};
