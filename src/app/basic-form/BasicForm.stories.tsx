import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { BasicForm } from './BasicForm';

const meta = {
  title: 'BasicForm',
  component: BasicForm,
  args: {},
} satisfies Meta<typeof BasicForm>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;