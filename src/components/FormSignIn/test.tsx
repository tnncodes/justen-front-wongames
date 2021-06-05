import { render, screen } from 'utils/test-utils'

import FormSignIn from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = render(<FormSignIn />)

    // verifique email
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()

    // verifique password
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()

    // verifique button
    expect(
      screen.getByRole('button', { name: /sign in now/i })
    ).toBeInTheDocument()

    // snapshot
    expect(container.parentElement).toMatchInlineSnapshot(`
      .c4 {
        display: inline-block;
        vertical-align: middle;
        overflow: hidden;
      }

      .c2 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        background: #EAEAEA;
        border-radius: 0.2rem;
        padding: 0 1.6rem;
        border: 0.2rem solid;
        border-color: #EAEAEA;
      }

      .c2:focus-within {
        box-shadow: 0 0 0.5rem #F231A5;
      }

      .c5 {
        color: #030517;
        font-family: Poppins,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
        font-size: 1.6rem;
        padding: 0.8rem 0;
        padding-left: 1.6rem;
        background: transparent;
        border: 0;
        outline: none;
        width: 100%;
      }

      .c5:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 2.4rem #EAEAEA inset;
        -webkit-filter: none;
        filter: none;
      }

      .c3 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        width: 2.2rem;
        color: #8F8F8F;
        -webkit-order: 0;
        -ms-flex-order: 0;
        order: 0;
      }

      .c3 > svg {
        width: 100%;
      }

      .c8 {
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        background: linear-gradient(180deg,#ff5f5f 0%,#f062c0 50%);
        color: #FAFAFA;
        border: 0;
        cursor: pointer;
        border-radius: 0.4rem;
        padding: 0.8rem;
        -webkit-text-decoration: none;
        text-decoration: none;
        height: 5rem;
        font-size: 1.6rem;
        padding: 0.8rem 4.8rem;
        width: 100%;
      }

      .c8:hover {
        background: linear-gradient(180deg,#e35565 0%,#d958a6 50%);
      }

      .c0 .c1 {
        margin: 0.8rem 0;
      }

      .c0 .c7 {
        margin: 3.2rem auto 1.6rem;
      }

      .c9 {
        font-size: 1.4rem;
        color: #030517;
        text-align: center;
      }

      .c9 a {
        color: #3CD3C1;
        -webkit-text-decoration: none;
        text-decoration: none;
        border-bottom: 0.1rem solid #3CD3C1;
        -webkit-transition: color,border,0.1s ease-in-out;
        transition: color,border,0.1s ease-in-out;
      }

      .c9 a:hover {
        color: #29b3a3;
        border-bottom: 0.1rem solid #29b3a3;
      }

      .c6 {
        display: block;
        font-size: 1.4rem;
        color: #030517;
        -webkit-text-decoration: none;
        text-decoration: none;
        text-align: right;
      }

      .c6:hover {
        color: #0f1971;
      }

      <body>
        <div>
          <div
            class="c0"
          >
            <form>
              <div
                class="c1 "
              >
                <div
                  class="c2"
                >
                  <div
                    class="c3"
                  >
                    <svg
                      aria-hidden="true"
                      class="c4"
                      fill="currentColor"
                      focusable="false"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 0h24v24H0V0z"
                        fill="none"
                      />
                      <path
                        d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"
                      />
                    </svg>
                  </div>
                  <input
                    class="c5"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value=""
                  />
                </div>
              </div>
              <div
                class="c1 "
              >
                <div
                  class="c2"
                >
                  <div
                    class="c3"
                  >
                    <svg
                      aria-hidden="true"
                      class="c4"
                      fill="currentColor"
                      focusable="false"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        fill="none"
                      >
                        <path
                          d="M0 0h24v24H0V0z"
                        />
                        <path
                          d="M0 0h24v24H0V0z"
                          opacity="0.87"
                        />
                      </g>
                      <path
                        d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                      />
                    </svg>
                  </div>
                  <input
                    class="c5"
                    name="password"
                    placeholder="Password"
                    type="password"
                    value=""
                  />
                </div>
              </div>
              <a
                class="c6"
                href="/forgot-password"
              >
                Forget your password?
              </a>
              <button
                class="c7 c8"
                type="submit"
              >
                <span>
                  <span>
                    Sign in now
                  </span>
                </span>
              </button>
              <div
                class="c9"
              >
                Don\`t have an account?
                 
                <a
                  href="/sign-up"
                >
                  Sign up
                </a>
              </div>
            </form>
          </div>
        </div>
      </body>
    `)
  })

  it('should render the forgot password link', () => {
    render(<FormSignIn />)

    expect(
      screen.getByRole('link', { name: /forget your password\?/i })
    ).toBeInTheDocument()
  })

  it('should render the text and link to sign up', () => {
    render(<FormSignIn />)

    // text
    expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument()

    // link
    expect(screen.getByText(/don`t have an account\?/i)).toBeInTheDocument()
  })
})
