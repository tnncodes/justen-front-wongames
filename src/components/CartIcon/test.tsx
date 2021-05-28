import { render, screen } from 'utils/test-utils'

import CartIcon from '.'

describe('<CartIcon />', () => {
  // Teste sem badge
  // ---------------
  it('should render without badge', () => {
    render(<CartIcon />)

    // verificar se existe o icone
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()

    // verificar se a badge não esteja no documento
    // em consultas que não espera encontrar determinado elemento, utilizar query
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  // Teste sem badge
  // ---------------
  it('should render with badge', () => {
    render(<CartIcon quantity={3} />)

    // verificar se a badge esteja no documento
    expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument()

    // verificar a quantidade de itens no badge
    expect(screen.getByText(/3/)).toBeInTheDocument()
  })

  // Testar para aceitar somente numeros positivos
  // ---------------------------------------------
  it('should render with badge only if has positive numbers', () => {
    render(<CartIcon quantity={-1} />)

    // não espero encontrar o badge
    // em consultas que não espera encontrar determinado elemento, utilizar query
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()

    // não espero numeros negativos
    expect(screen.queryByText(/-1/)).not.toBeInTheDocument()
  })
})
