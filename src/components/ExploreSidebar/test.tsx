import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ExploreSidebar from '.'

describe('<ExploreSidebar />', () => {
  // verificar se existe os titulos
  // ------------------------------
  it('should render the headings', () => {
    renderWithTheme(<ExploreSidebar />)

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
    renderWithTheme(<ExploreSidebar />)

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
    renderWithTheme(<ExploreSidebar />)

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })
})
