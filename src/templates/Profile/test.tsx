import { render, screen } from 'utils/test-utils'
import 'match-media-mock'

import Profile from '.'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ asPath: '/profile/me' }))
}))

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/Heading', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Heading">{children}</div>
  }
}))

jest.mock('components/ProfileMenu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ProfileMenu" />
  }
}))

describe('<Profile />', () => {
  it('should render sections', () => {
    render(<Profile>Lorem Ipsum</Profile>)

    // verificar se o children existe
    expect(screen.getByText('Lorem Ipsum')).toBeInTheDocument()

    // verificar se existe titulo
    expect(screen.getByText('My profile')).toBeInTheDocument()

    // verificar se existe menu
    expect(screen.getByTestId('Mock ProfileMenu')).toBeInTheDocument()
  })
})
