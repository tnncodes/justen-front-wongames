import { renderWithTheme } from 'utils/tests/helpers'

import TextContent from '.'

const props = {
  title: '',
  content: ''
}

describe('<TextContent />', () => {
  it('should render the heading', () => {
    renderWithTheme(<TextContent {...props} />)
  })
})
