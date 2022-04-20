import { combine, restore } from 'effector';

import { getTestFx } from './effects';
import { getTest } from './events';

const $id = restore(getTest, '');

const $value = restore(getTestFx.doneData, '');

const $test = combine($id, $value, (id, value) => ({
  id,
  value
}));

export { $id, $value, $test };
