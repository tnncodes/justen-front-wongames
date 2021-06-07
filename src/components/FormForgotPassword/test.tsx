import 'server.mock'
import { render, screen } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import FormForgotPassword from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
let query = {}

useRouter.mockImplementation(() => ({
  query
}))

describe('<FormForgotPassword />', () => {
  it('should render the form', () => {
    render(<FormForgotPassword />)

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /send email/i })
    ).toBeInTheDocument()
  })

  it('should validate the email', async () => {
    render(<FormForgotPassword />)

    // acao de digitar email
    await userEvent.type(
      screen.getByPlaceholderText(/email/i),
      'valid@email.com'
    )

    // acao de clicar
    userEvent.click(screen.getByRole('button', { name: /send email/i }))

    // espero receber mensagem de sucesso!
    expect(
      await screen.findByText(/You just received an email!/i)
    ).toBeInTheDocument()
  })

  it('should show  invalid email', async () => {
    render(<FormForgotPassword />)

    // acao de digitar email
    await userEvent.type(screen.getByPlaceholderText(/email/i), 'invalid')

    // acao de clicar
    userEvent.click(screen.getByRole('button', { name: /send email/i }))

    // espero receber mensagem de erro!
    expect(
      await screen.findByText(/must be a valid email/i)
    ).toBeInTheDocument()
  })

  it('should show an inexistent email error', async () => {
    render(<FormForgotPassword />)

    // acao de digitar email
    await userEvent.type(
      screen.getByPlaceholderText(/email/i),
      'false@email.com'
    )

    // acao de clicar
    userEvent.click(screen.getByRole('button', { name: /send email/i }))

    // espero receber mensagem de erro!
    expect(
      await screen.findByText(/This email does not exist/i)
    ).toBeInTheDocument()
  })

  it('should autofill if comes via logged user', () => {
    query = { email: 'valid@email.com' }
    render(<FormForgotPassword />)

    expect(screen.getByPlaceholderText(/email/i)).toHaveValue('valid@email.com')
  })
})
