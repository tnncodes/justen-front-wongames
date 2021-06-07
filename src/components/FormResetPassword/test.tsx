import 'server.mock'
import { signIn } from 'next-auth/client'

import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from 'utils/test-utils'

import FormResetPassword from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
let query = {}

useRouter.mockImplementation(() => ({
  query
}))

// mockando metodo
jest.mock('next-auth/client', () => ({
  signIn: jest.fn()
}))

describe('<FormResetPassword>', () => {
  // verificar se o componente esta renderizando
  it('should render the form', () => {
    render(<FormResetPassword />)

    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/confirm password/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /reset password/i })
    ).toBeInTheDocument()
  })

  // verificar se passar senha errada
  it('should show validation errors', async () => {
    render(<FormResetPassword />)

    // informo as senhas
    await userEvent.type(screen.getByPlaceholderText('Password'), '123')
    await userEvent.type(screen.getByPlaceholderText(/confirm/i), '321')

    // clico para enviar
    userEvent.click(screen.getByRole('button', { name: /reset password/i }))

    // espero que as senhas nao batam
    expect(await screen.findByText(/confirm password does not match/i))
  })

  it('should show error when code provided is wrong', async () => {
    query = { code: 'wrong_code' }
    render(<FormResetPassword />)

    // informo as senhas
    await userEvent.type(screen.getByPlaceholderText('Password'), '123')
    await userEvent.type(screen.getByPlaceholderText(/confirm/i), '123')

    // clicar para enviar
    userEvent.click(screen.getByRole('button', { name: /reset password/i }))

    // espero mensagem de erro de codigo
    expect(
      await screen.findByText(/Incorrect code provided/i)
    ).toBeInTheDocument()
  })

  // testando o cenario em que tudo ocorre corretamente
  it('should reset the password and sign in the user', async () => {
    query = { code: 'right_code' }

    render(<FormResetPassword />)

    // digitando as 2 senhas
    await userEvent.type(screen.getByPlaceholderText('Password'), '123')
    await userEvent.type(screen.getByPlaceholderText(/confirm/i), '123')

    // enviando para a API
    userEvent.click(screen.getByRole('button', { name: /reset password/i }))

    // o await eh porque precisa esperar a resposta
    await waitFor(() => {
      expect(signIn).toHaveBeenCalledWith('credentials', {
        email: 'valid@email.com',
        password: '123',
        callbackUrl: '/'
      })
    })
  })
})
