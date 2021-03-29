import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />)

    // pegando o input a partir do papel -> role
    expect(screen.getByRole('checkbox')).toBeInTheDocument()

    // pegando o input a partir da label associada
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()

    // pegando o input a partir do texto dela
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })

  // verificar se caso a label não seja passada ela não é renderizada
  it('should render without label', () => {
    renderWithTheme(<Checkbox />)

    // sempre que for pesquisar por algo que não quer encontrar, pesquisar com 'query'
    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
  })

  // verificar a cor da label é preta
  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517'
    })
  })
})
