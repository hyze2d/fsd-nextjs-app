import {
  IconGallery as _IconGallery,
  IconItem as _IconItem
} from '@storybook/addon-docs';
import type { IconItemProps } from '@storybook/components';
import type { Meta, Story } from '@storybook/react';
import type { FC, PropsWithChildren } from 'react';

import { CodepenIcon } from '../codepen';
import { Icon } from '../index';

import { TelegramIcon } from '../telegram';
import { TwitterIcon } from '../twitter';
import { VkIcon } from '../vk';
import { WhatsappIcon } from '../whatsapp';

const IconGallery = _IconGallery as FC<PropsWithChildren<{}>>;
const IconItem = _IconItem as FC<PropsWithChildren<IconItemProps>>;

export const Playground: Story = () => (
  <IconGallery>
    <IconItem name='Icon.ChevronDown'>
      <Icon.ChevronDown />
    </IconItem>

    <IconItem name='Icon.ChevronLeft'>
      <Icon.ChevronLeft />
    </IconItem>

    <IconItem name='Icon.ChevronRight'>
      <Icon.ChevronRight />
    </IconItem>

    <IconItem name='Icon.ChevronUp'>
      <Icon.ChevronUp />
    </IconItem>

    <IconItem name='CodepenIcon'>
      <CodepenIcon />
    </IconItem>

    <IconItem name='TelegramIcon'>
      <TelegramIcon />
    </IconItem>

    <IconItem name='TwitterIcon'>
      <TwitterIcon />
    </IconItem>

    <IconItem name='VkIcon'>
      <VkIcon />
    </IconItem>

    <IconItem name='WhatsappIcon'>
      <WhatsappIcon />
    </IconItem>
  </IconGallery>
);
export const Sprite: Story = () => (
  <IconGallery>
    <IconItem name='Icon.ChevronDown'>
      <Icon.ChevronDown />
    </IconItem>

    <IconItem name='Icon.ChevronLeft'>
      <Icon.ChevronLeft />
    </IconItem>

    <IconItem name='Icon.ChevronRight'>
      <Icon.ChevronRight />
    </IconItem>

    <IconItem name='Icon.ChevronUp'>
      <Icon.ChevronUp />
    </IconItem>
  </IconGallery>
);
export const Standalone: Story = () => (
  <IconGallery>
    <IconItem name='CodepenIcon'>
      <CodepenIcon />
    </IconItem>

    <IconItem name='TelegramIcon'>
      <TelegramIcon />
    </IconItem>

    <IconItem name='TwitterIcon'>
      <TwitterIcon />
    </IconItem>

    <IconItem name='VkIcon'>
      <VkIcon />
    </IconItem>

    <IconItem name='WhatsappIcon'>
      <WhatsappIcon />
    </IconItem>
  </IconGallery>
);

const story: Meta = {
  title: 'Icons'
};

export default story;
