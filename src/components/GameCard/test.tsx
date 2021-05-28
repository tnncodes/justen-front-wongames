import { render, screen, fireEvent } from 'utils/test-utils'
import theme from 'styles/theme'

import GameCard from '.'

const props = {
  slug: 'population-zero',
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 235
}

describe('<GameCard />', () => {
  it('should render the correctly', () => {
    // renderizar o GameCard
    // ---------------------
    render(<GameCard {...props} />)

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

    // verificar se existe o slug
    // --------------------------
    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/game/${props.slug}`
    )

    // verificar se o price foi renderizado
    // ------------------------------------
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    // renderizar o componente
    render(<GameCard {...props} />)

    const price = screen.getByText('$235.00')

    // preço não tenha line-through
    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })

    // preço não tenha o background secundário
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it('should render a line-through in price when promotional', () => {
    // renderiza o componente com promotionalPrice // 200 // 15 reais
    render(<GameCard {...props} promotionalPrice={15} />)

    // preço tenha line-through (235)
    expect(screen.getByText('$235.00')).toHaveStyle({
      textDecoration: 'line-through'
    })

    // preço novo promocional não vai ter line-through (15)
    expect(screen.getByText('$15.00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    // renderiza o componente com favorite
    render(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()

    render(<GameCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should render Ribbon', () => {
    render(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )
    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
    expect(ribbon).toBeInTheDocument()
  })
})
