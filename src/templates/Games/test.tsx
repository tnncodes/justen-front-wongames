import { screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'

import { renderWithTheme } from 'utils/tests/helpers'
import filterItemsMock from 'components/ExploreSidebar/mock'
import { fetchMoreMock, gamesMock } from './mocks'

import Games from '.'
import userEvent from '@testing-library/user-event'
import apolloCache from 'utils/apolloCache'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>
  }
}))

describe('<Games />', () => {
  it('should render loading when starting the template', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    // verifico se nao tiver dados, exibir loading
    expect(screen.getByText(/loading.../i)).toBeInTheDocument()
  })

  it('should render sections', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    // verifico se nao tiver dados, exibir loading
    expect(screen.getByText(/loading.../i)).toBeInTheDocument()

    // esperamos até que tenhamos dados para obter os elementos
    // getByTest => tem certeza do elemento
    // queryByTest => nao tem o elemento
    // findByTest => processos assincronos

    // verificar se existe sidebar na página
    expect(await screen.findByTestId('Mock ExploreSidebar')).toBeInTheDocument()

    // verificar se existe o jogo na pagina
    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()

    // verificar se existe button na página
    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })

  it('should render more games when show more is clicked', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    // verificar se existe o jogo `Sample Game` na pagina
    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()

    // clicar no boato de showMore
    userEvent.click(await screen.findByRole('button', { name: /show more/i }))

    // verificar se existe o jogo `Fetch More Game` na pagina
    expect(await screen.findByText(/Fetch More Game/i)).toBeInTheDocument()

    // disponibiliza url com o log
    // screen.logTestingPlaygroundURL()
  })
})
