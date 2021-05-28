import { ThemeProvider } from 'styled-components'
import { CartContext, CartContextDeafaultValues } from 'hooks/use-cart'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

export const parameters = {
  backgrounds: {
    default: 'won-light',
    values: [
      {
        name: 'won-light',
        value: theme.colors.white
      },
      {
        name: 'won-dark',
        value: theme.colors.mainBg
      }
    ]
  }
}

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={theme}>
      <CartContext.Provider value={{...CartContextDeafaultValues, ...(context?.args?.cartContextValue || {}), ...context.args}}>
      <GlobalStyles removeBg />
      <Story />
      </CartContext.Provider>
    </ThemeProvider>
  )
  ]
