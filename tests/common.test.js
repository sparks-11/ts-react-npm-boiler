import * as React from 'react'
import { render, describe, it } from '@testing-library/react'

import 'jest-canvas-mock'

import { MyCounter } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<MyCounter />)
  })
})
