import { render, screen } from 'utils/test-utils'

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
    render(<OrdersList items={mock} />)

    // verificar se existe titulo
    expect(
      screen.getByRole('heading', { name: /my orders/i })
    ).toBeInTheDocument()

    // verificar se os items estao sendo renderizados
    expect(screen.getAllByTestId('Mock GameItem')).toHaveLength(2)
  })

  it('should render empty state', () => {
    render(<OrdersList />)

    // verificar o empty
    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })
})
