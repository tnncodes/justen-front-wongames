import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    )

    // verificar se tem 2 loogos

    // verificar se tem o heading principal do banner

    // verificar se tem o subtitle

    // verificar se tem o title do content

    // verificar se o children está sendo renderizado
  })
})
