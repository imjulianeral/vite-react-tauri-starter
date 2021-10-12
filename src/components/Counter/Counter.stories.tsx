import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Counter } from './Counter'

export default {
  title: 'Example/Counter',
  component: Counter,
} as ComponentMeta<typeof Counter>

const Template: ComponentStory<typeof Counter> = () => <Counter />

export const Count = Template.bind({})
