import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render the correctly', () => {
    // renderizar o GameCard
    // ---------------------
    renderWithTheme(<GameCard {...props} />)

    // verificar se o title foi renderizado
    // ------------------------------------
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    // verificar se o developer foi renderizado
    // ----------------------------------------
    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    // verificar se o img foi renderizado
    // ----------------------------------
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    // verificar se o price foi renderizado
    // ------------------------------------
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    // renderizar o componente
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText('R$ 235,00')

    // preço não tenha line-through
    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })

    // preço não tenha o background secundário
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it('should render a line-through in price when promotional', () => {
    // renderiza o componente com promotionalPrice // 200 // 15 reais
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 15,00" />)

    // preço tenha line-through (235)
    expect(screen.getByText('R$ 235,00')).toHaveStyle({
      textDecoration: 'line-through'
    })

    // preço novo promocional não vai ter line-through (15)
    expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })
})
