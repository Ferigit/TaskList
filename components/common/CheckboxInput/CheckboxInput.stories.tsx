import type { Meta, StoryObj } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';

import Input from './index';

const meta = {
  title: 'Common/Checkbox',
  component: Input,

  parameters: {
    layout: 'centered',
  },
  decorators: [
    (story) => {
      const formMethods = useForm();
      return (
        <FormProvider {...formMethods}>
          <div>{story()}</div>
        </FormProvider>
      );
    },
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name:'name',
    label: 'Checkbox',
    control: {value:"", onChange:()=>{}},
  },
};
export const Error: Story = {
  args: {
    label: 'Checkbox',
    name: 'name',
    errors: { name: { message: 'errors' } },
    control: {value:"", onChange:()=>{}},
  },
};
