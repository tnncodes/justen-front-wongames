import { render, screen } from 'utils/test-utils'

import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    render(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    )

    // verificar se tem 2 loogos
    expect(screen.getAllByRole('img', { name: 'Won Games' })).toHaveLength(2)

    // verificar se tem o heading principal do banner
    expect(
      screen.getByRole('heading', {
        name: /All your favorite games in one place/i
      })
    ).toBeInTheDocument()

    // verificar se tem o subtitle
    expect(
      screen.getByRole('heading', {
        name: /won is the best and most complete gaming platform/i
      })
    ).toBeInTheDocument()

    // verificar se tem o title do content
    expect(
      screen.getByRole('heading', {
        name: /auth title/i
      })
    ).toBeInTheDocument()

    // verificar se o children está sendo renderizado
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
