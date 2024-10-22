import { Meta, StoryFn } from '@storybook/react';

import Logo, { ILogo  } from './index';

const meta: Meta = {
  title: 'Components/Elements/Logo',
  component: Logo,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: StoryFn<ILogo > = (args) => {
  return (
    <div className="h-[35px] w-[300px]">
      <Logo {...args} />
    </div>
  );
}

export const Default = Template.bind({});
Default.args = {
  width: 120,
};

export const Large = Template.bind({});
Large.args = {
  width: 200,
};
