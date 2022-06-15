import { useEvent, useStore } from 'effector-react';
import { createLib } from 'effector-view';

const { createView } = createLib({ useStore, useEvent });

export { createView };