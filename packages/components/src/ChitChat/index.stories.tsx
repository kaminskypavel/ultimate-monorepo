import React from 'react';

import ChitChat from './';

export default {
  title: 'Example/ChitChat',
  component: ChitChat,
};

const Template = (args) => <ChitChat {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
