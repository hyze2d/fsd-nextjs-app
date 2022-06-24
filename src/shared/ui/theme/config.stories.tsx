import { ColorItem, ColorPalette } from '@storybook/addon-docs/blocks';
import type { Meta, Story } from '@storybook/react';

import { theme } from './config';

export const Dark: Story = () => (
  <ColorPalette>
    {Object.entries(theme.dark).map(([key, value]) => (
      <ColorItem key={key} title={key} subtitle='' colors={[value]} />
    ))}
  </ColorPalette>
);
export const Light: Story = () => (
  <ColorPalette>
    {Object.entries(theme.light).map(([key, value]) => (
      <ColorItem key={key} title={key} subtitle='' colors={[value]} />
    ))}
  </ColorPalette>
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
