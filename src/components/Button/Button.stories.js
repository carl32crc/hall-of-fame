import React from 'react'

import { action } from '@storybook/addon-actions'
import { Button } from './Button'

export default {
  title: 'Button',
  component: Button
}

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span>
      😀 😎 👍 💯
    </span>
  </Button>
)

Emoji.story = {
  name: 'With emojis'
}
