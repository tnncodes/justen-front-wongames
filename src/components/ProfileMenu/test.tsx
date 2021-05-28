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

    expect(screen.getByRole('link', { name: /my cards/i })).toHaveAttribute(
      'href',
      '/profile/cards'
    )

    // forma 2 de testar
    expect(screen.getByRole('link', { name: /my orders/i })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()

    // gerar snaphot em outro arquivo
    // ------------------------------
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the menu with an active link defined', () => {
    render(<ProfileMenu activeLink="/profile/cards" />)

    // testar o link ativo
    // -------------------
    expect(screen.getByRole('link', { name: /my cards/i })).toHaveStyle({
      background: theme.colors.primary,
      color: theme.colors.white
    })
  })
})
