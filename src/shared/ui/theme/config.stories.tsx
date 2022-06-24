/* eslint-disable import/exports-last,import/group-exports */
import { ColorItem, ColorPalette } from '@storybook/addon-docs/blocks';
import type { Meta, Story } from '@storybook/react';
import { theme } from '@ui/theme/config';

export const Dark: Story = () => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  <ColorPalette>
    {Object.entries(theme.dark).map(([key, value]) => (
      <ColorItem key={key} title={key} subtitle='' colors={[value]} />
    ))}
  </ColorPalette>
);
export const Light: Story = () => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
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
