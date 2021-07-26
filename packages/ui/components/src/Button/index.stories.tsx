import React from 'react';

import Button from './';

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Hello World Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
};
