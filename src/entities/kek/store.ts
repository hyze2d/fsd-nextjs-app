import { combine, restore } from 'effector';

import { getKekFx } from './effects';
import { getKek } from './events';

const $id = restore(getKek, '');

const $value = restore(getKekFx.doneData, '');

const $kek = combine($id, $value, (id, value) => ({
  id,
  value
}));

export { $id, $value, $kek };
