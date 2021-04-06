import 'match-media-mock'
import { renderWithTheme } from '../../utils/tests/helpers'

import Gallery from '.'

const items = [
  {
    src: '/img/games/cyberpunk-1.jpeg',
    label: 'Gallery Image 1'
  }
]

describe('Gallery', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Gallery items={items} />)

    expect(container.querySelectorAll('.slick-active')).toHaveLength(1)
  })
})
