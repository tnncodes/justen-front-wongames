import { render, screen } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'
import { CartContextDefaultValues } from 'hooks/use-cart'
import CartButton from '.'

describe('<CartButton />', () => {
  // Adicionar item
  it('should render button to add and call the method if clicked', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => false,
      addToCart: jest.fn()
    }

    render(<CartButton id="1" />, { cartProviderProps })

    // espero que o botao esteja na pagina
    const button = screen.getByLabelText(/add to cart/i)
    expect(button).toBeInTheDocument()

    // espero que ao clicar chame a Add e insira o id 1
    userEvent.click(button)
    expect(cartProviderProps.addToCart).toHaveBeenCalledWith('1')
  })

  // Remover item
  it('should render button to remove and call the method if clicked', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => true,
      removeFromCart: jest.fn()
    }

    render(<CartButton id="1" />, { cartProviderProps })

    // espero que o botao esteja na pagina
    const button = screen.getByLabelText(/remove from cart/i)
    expect(button).toBeInTheDocument()

    // espero que ao clicar chame a Add e insira o id 1
    userEvent.click(button)
    expect(cartProviderProps.removeFromCart).toHaveBeenCalledWith('1')
  })
})
