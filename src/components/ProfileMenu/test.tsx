import { render, screen } from 'utils/test-utils'
import theme from 'styles/theme'

import ProfileMenu from '.'

describe('ProfileMenu', () => {
  it('should render the menu', () => {
    const { container } = render(<ProfileMenu />)

    // verificar os 4 links existentes
    // -------------------------------

    // forma 1 de testar
    expect(screen.getByRole('link', { name: /my profile/i })).toHaveAttribute(
      'href',
      '/profile/me'
    )

    // forma 2 de testar
    expect(screen.getByRole('link', { name: /my orders/i })).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /sign out/i })
    ).toBeInTheDocument()

    // gerar snaphot em outro arquivo
    // ------------------------------
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the menu with an active link defined', () => {
    render(<ProfileMenu activeLink="/profile/orders" />)

    // testar o link ativo
    // -------------------
    expect(screen.getByRole('link', { name: /my orders/i })).toHaveStyle({
      background: theme.colors.primary,
      color: theme.colors.white
    })
  })
})
