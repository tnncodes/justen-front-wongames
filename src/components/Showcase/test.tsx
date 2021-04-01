import 'match-media-mock'
import { renderWithTheme } from 'utils/tests/helpers'

import Showcase from '.'

describe('<Showcase />', () => {
  it('should render the Showcase', () => {
    renderWithTheme(<Showcase />)
  })
})
