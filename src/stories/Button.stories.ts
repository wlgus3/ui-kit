import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../components/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
   color: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Color: Story = {
  args: {
    color: 'Blue_B_Default',
    label: 'Button',
  },
};

export const Icon: Story = {
 args: {
   icon: '',
   label: 'Button',
 },
};

export const IconWithoutLabel: Story = {
 args: {
   icon: '',
 },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Button',
  },
};

export const Medium: Story = {
 args: {
   size: 'md',
   label: 'Button',
 },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Button',
  },
};

export const XSmall: Story = {
 args: {
   size: 'xs',
   label: 'Button',
 },
};