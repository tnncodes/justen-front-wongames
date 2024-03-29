import { render, screen } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'
import { css } from 'styled-components'

import ExploreSidebar from '.'
import { Overlay } from './styles'
import items from './mock'

describe('<ExploreSidebar />', () => {
  // verificar se existe os titulos
  // ------------------------------
  it('should render the headings', () => {
    render(<ExploreSidebar items={items} onFilter={jest.fn} />)

    // price
    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()

    // sort by
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()

    // system
    expect(
      screen.getByRole('heading', { name: /platform/i })
    ).toBeInTheDocument()

    // genre
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
  })

  // verificar se existe os inputs
  // -----------------------------
  it('should render inputs', () => {
    render(<ExploreSidebar items={items} onFilter={jest.fn} />)

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
    render(<ExploreSidebar items={items} onFilter={jest.fn} />)

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })

  // verificar valores iniciais marcados
  // ------------------------------------
  it('should check initial values that are passed', () => {
    render(
      <ExploreSidebar
        items={items}
        initialValues={{ platforms: ['windows'], sort_by: 'low-to-high' }}
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

    render(
      <ExploreSidebar
        items={items}
        initialValues={{ platforms: ['windows'], sort_by: 'low-to-high' }}
        onFilter={onFilter}
      />
    )

    // clicando no botao filter
    userEvent.click(screen.getByRole('button', { name: /filter/i }))

    // espero que a funcao filtrar seja chamada com os valores iniciais
    expect(onFilter).toBeCalledWith({
      platforms: ['windows'],
      sort_by: 'low-to-high'
    })
  })

  // verificar quando os itens sao marcados
  // --------------------------------------
  it('should filter with checked values', () => {
    // mock da funcao onFilter (verifica se foi chamado e com quais valoes)
    const onFilter = jest.fn()

    // renderizacao do componente
    render(<ExploreSidebar items={items} onFilter={onFilter} />)

    // clicando e marcando o item windows
    userEvent.click(screen.getByLabelText(/windows/i))

    // clicando e marcando o item linux
    userEvent.click(screen.getByLabelText(/linux/i))

    // clicando e marcando o item low to high
    userEvent.click(screen.getByLabelText(/low to high/i))

    // espero que a funcao seja chamada 4 vezes
    expect(onFilter).toBeCalledTimes(4)

    // espero que a funcao filtrar seja chamada com os valores iniciais
    expect(onFilter).toBeCalledWith({
      platforms: ['windows', 'linux'],
      sort_by: 'low-to-high'
    })
  })

  // verificar se os valores do radio estao alternando ao clique
  // -----------------------------------------------------------
  it('should altern between radio options', () => {
    // mock da funcao onFilter (verifica se foi chamado e com quais valoes)
    const onFilter = jest.fn()

    // renderizacao do componente
    render(<ExploreSidebar items={items} onFilter={onFilter} />)

    // clicando e marcando o item low to high
    userEvent.click(screen.getByLabelText(/low to high/i))

    // clicando e marcando o item high to low
    userEvent.click(screen.getByLabelText(/high to low/i))

    // espero que a funcao filtrar tenha o resultado com high to low
    expect(onFilter).toBeCalledWith({ sort_by: 'high-to-low' })
  })

  // verificar o abrir e fechar no mobile
  // ------------------------------------
  it('should open/close sidebar when filtering on mobile ', () => {
    // renderizacao do componente
    const { container } = render(
      <ExploreSidebar items={items} onFilter={jest.fn} />
    )

    const variant = {
      media: '(max-width:768px)',
      modifier: String(css`
        ${Overlay}
      `)
    }

    const Element = container.firstChild

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)

    // abrir
    userEvent.click(screen.getByLabelText(/open filters/))
    expect(Element).toHaveStyleRule('opacity', '1', variant)

    // fechar
    userEvent.click(screen.getByLabelText(/close filters/))
    expect(Element).not.toHaveStyleRule('opacity', '1', variant)

    // abrir - fechar
    userEvent.click(screen.getByLabelText(/open filters/))
    userEvent.click(screen.getByRole('button', { name: /filter/i }))
    expect(Element).not.toHaveStyleRule('opacity', '1', variant)
  })
})
