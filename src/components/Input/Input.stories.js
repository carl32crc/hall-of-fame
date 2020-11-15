import React from 'react'

import { Input } from './Input'

export default {
  title: 'Input',
  component: Input
}

export const Empty = () => <Input />
export const WithPlaceholder = () => <Input placeholder='sample@gmail.com'/>
export const WithValue = () => <Input value='myemail@gmail.com'/>
