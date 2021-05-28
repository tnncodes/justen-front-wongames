import { render, screen } from 'utils/test-utils'
import 'match-media-mock'

import Slider from '.'

describe('<Slider />', () => {
  it('should render children as slider item', () => {
    const { container } = render(
      <Slider settings={{ slidesToShow: 2, infinite: false }}>
        <p>Item 1</p>
        <p>Item 2</p>
      </Slider>
    )

    // verifica se o item 1 contem a classe slick-slide
    // ------------------------------------------------
    expect(
      screen.getByText(/item 1/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')

    // verifica se o item 2 contem a classe slick-slide
    // ------------------------------------------------
    expect(
      screen.getByText(/item 2/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')

    // gera o snapshot
    // ---------------
    expect(container.firstChild).toMatchSnapshot()
  })
})
