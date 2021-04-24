import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ExploreSidebar from '.'

import items from './mock'

describe('<ExploreSidebar />', () => {
  // verificar se existe os titulos
  // ------------------------------
  it('should render the headings', () => {
    renderWithTheme(<ExploreSidebar items={items} />)

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
    renderWithTheme(<ExploreSidebar items={items} />)

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
    renderWithTheme(<ExploreSidebar items={items} />)

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })

  // verificar valores iniciais marcados
  // ------------------------------------
  it('should check initial values that are passed', () => {
    renderWithTheme(
      <ExploreSidebar
        items={items}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
      />
    )

    // checkbox
    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()

    // radio
    expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked()
  })
})
