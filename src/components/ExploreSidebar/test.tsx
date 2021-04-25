import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import ExploreSidebar from '.'

import items from './mock'

describe('<ExploreSidebar />', () => {
  // verificar se existe os titulos
  // ------------------------------
  it('should render the headings', () => {
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn} />)

    // price
    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()

    // sort by
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()

    // system
    expect(screen.getByRole('heading', { name: /system/i })).toBeInTheDocument()

    // genre
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
  })

  // verificar se existe os inputs
  // -----------------------------
  it('should render inputs', () => {
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn} />)

    // checkbox
    expect(
      screen.getByRole('checkbox', { name: /under \$50/i })
    ).toBeInTheDocument()

    // radio
    expect(
      screen.getByRole('radio', { name: /low to high/i })
    ).toBeInTheDocument()
  })

  // verificar se existe o botao
  // ---------------------------
  it('should render the filter button', () => {
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn} />)

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })

  // verificar valores iniciais marcados
  // ------------------------------------
  it('should check initial values that are passed', () => {
    renderWithTheme(
      <ExploreSidebar
        items={items}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
        onFilter={jest.fn}
      />
    )

    // checkbox
    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()

    // radio
    expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked()
  })

  // verificar itens iniciais filtrados
  // ----------------------------------
  it('should filter with initial values', () => {
    // mock da funcao onFilter (verifica se foi chamado e com quais valoes)
    const onFilter = jest.fn()

    renderWithTheme(
      <ExploreSidebar
        items={items}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
        onFilter={onFilter}
      />
    )

    // clicando no botao filter
    userEvent.click(screen.getByRole('button', { name: /filter/i }))

    // espero que a funcao filtrar seja chamada com os valores iniciais
    expect(onFilter).toBeCalledWith({ windows: true, sort_by: 'low-to-high' })
  })

  // verificar quando os itens sao marcados
  // --------------------------------------
  it('should filter with checked values', () => {
    // mock da funcao onFilter (verifica se foi chamado e com quais valoes)
    const onFilter = jest.fn()

    // renderizacao do componente
    renderWithTheme(<ExploreSidebar items={items} onFilter={onFilter} />)

    // clicando e marcando o item windows
    userEvent.click(screen.getByLabelText(/windows/i))

    // clicando e marcando o item linux
    userEvent.click(screen.getByLabelText(/linux/i))

    // clicando e marcando o item low to high
    userEvent.click(screen.getByLabelText(/low to high/i))

    // clicando no botao filter
    userEvent.click(screen.getByRole('button', { name: /filter/i }))

    // espero que a funcao filtrar seja chamada com os valores iniciais
    expect(onFilter).toBeCalledWith({
      windows: true,
      linux: true,
      sort_by: 'low-to-high'
    })
  })

  // verificar se os valores do radio estao alternando ao clique
  // -----------------------------------------------------------
  it('should altern between radio options', () => {
    // mock da funcao onFilter (verifica se foi chamado e com quais valoes)
    const onFilter = jest.fn()

    // renderizacao do componente
    renderWithTheme(<ExploreSidebar items={items} onFilter={onFilter} />)

    // clicando e marcando o item low to high
    userEvent.click(screen.getByLabelText(/low to high/i))

    // clicando e marcando o item high to low
    userEvent.click(screen.getByLabelText(/high to low/i))

    // clicando no botao filter
    userEvent.click(screen.getByRole('button', { name: /filter/i }))

    // espero que a funcao filtrar tenha o resultado com high to low
    expect(onFilter).toBeCalledWith({ sort_by: 'high-to-low' })
  })
})
