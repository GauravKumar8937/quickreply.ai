// src/components/Slider/Slider.stories.jsx
import React from 'react';
import Slider from '../slider-js/src/components/slider/Slider';

export default {
  title: 'Components/Slider',
  component: Slider,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['continuous', 'discrete'],
    },
    subtype: {
      control: { type: 'radio' },
      options: ['single', 'range'],
    },
    steps: {
      control: { type: 'number', min: 1, max: 10 },
    },
    handleSize: {
      control: { type: 'radio' },
      options: ['size_24', 'size_32'],
    },
  },
};

const Template = (args) => <Slider {...args} />;

export const ContinuousSingle = Template.bind({});
ContinuousSingle.args = {
  type: 'continuous',
  subtype: 'single',
  handleSize: 'size_24',
};

export const DiscreteRange = Template.bind({});
DiscreteRange.args = {
  type: 'discrete',
  subtype: 'range',
  steps: 10,
  handleSize: 'size_32',
};
