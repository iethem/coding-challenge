import { Story, Meta } from '@storybook/react';

import { Sidebar } from './sidebar';

export default {
  component: Sidebar,
  title: 'Sidebar',
} as Meta;

const Template: Story<any> = (args) => (
  <Sidebar />
);

export const Primary = Template.bind({});
Primary.args = {};
