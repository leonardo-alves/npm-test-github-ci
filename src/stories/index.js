import React from 'react'
import { storiesOf } from '@storybook/react'
import MyComponent from '../'

storiesOf('Button', module)
  .add('primary style', () => (
    <MyComponent text="texto" />
  ))
