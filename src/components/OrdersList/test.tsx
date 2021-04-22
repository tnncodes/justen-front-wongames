import { screen } from '@testing-library/react'
import React from 'react'
import { renderWithTheme } from 'utils/tests/helpers'

import OrdersList from '.'
import mock from './mock'

jest.mock('components/Empty', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Empty" />
  }
}))

jest.mock('components/GameItem', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock GameItem">{children}</div>
  }
}))

describe('<OrdersList />', () => {
  it('should render the heading', () => {
    const { debug } = renderWithTheme(<OrdersList items={mock} />)

    debug()

    // verificar se existe titulo
    expect(
      screen.getByRole('heading', { name: /my orders/i })
    ).toBeInTheDocument()

    // verificar se os items estao sendo renderizados
    expect(screen.getAllByTestId('Mock GameItem')).toHaveLength(2)
  })

  it('should render empty state', () => {
    renderWithTheme(<OrdersList />)

    // verificar o empty
    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })
})
