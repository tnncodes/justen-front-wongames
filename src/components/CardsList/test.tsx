import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import cardsMock from 'components/PaymentOptions/mock'

import CardsList from '.'

describe('<CardsList />', () => {
  it('should render the cards list', () => {
    renderWithTheme(<CardsList cards={cardsMock} />)

    // verificar se existe o titulo
    expect(
      screen.getByRole('heading', { name: /my cards/i })
    ).toBeInTheDocument()

    // verificar se existe a imagem
    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
      'src',
      '/img/visa.png'
    )

    expect(screen.getByRole('img', { name: /mastercard/i })).toHaveAttribute(
      'src',
      '/img/master-card.png'
    )

    // verificar se existe o numero de cartao
    expect(screen.getByText(/4325/)).toBeInTheDocument()
    expect(screen.getByText(/4326/)).toBeInTheDocument()
  })
})
