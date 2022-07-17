import { is } from 'effector';
import { useUnit, useStoreMap } from 'effector-react';
import { createLib } from 'effector-view';

const { createView, connect } = createLib({ useUnit, useStoreMap, is });

export { createView, connect };
