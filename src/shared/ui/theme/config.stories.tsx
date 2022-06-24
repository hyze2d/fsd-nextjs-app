import { ColorItem, ColorPalette } from '@storybook/addon-docs/blocks';
import type { Meta, Story } from '@storybook/react';

import type { FC, PropsWithChildren } from 'react';
import { theme } from './config';

const PatchedColorPalette = ColorPalette as FC<PropsWithChildren<{}>>;

export const Dark: Story = () => (
  <PatchedColorPalette>
    {Object.entries(theme.dark).map(([key, value]) => (
      <ColorItem key={key} title={key} subtitle='' colors={[value]} />
    ))}
  </PatchedColorPalette>
);
export const Light: Story = () => (
  <PatchedColorPalette>
    {Object.entries(theme.light).map(([key, value]) => (
      <ColorItem key={key} title={key} subtitle='' colors={[value]} />
    ))}
  </PatchedColorPalette>
);

const story: Meta = {
  title: 'Theme/Colors',

  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true }
    }
  },

  decorators: [
    Story => (
      <div style={{ padding: 12 }}>
        <Story />
      </div>
    )
  ]
};

export default story;
