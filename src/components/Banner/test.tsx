import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
  img: 'https://source/unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defty-death'
}

describe('Banner', () => {
  it('should render correctly', () => {
    renderWithTheme(<Banner {...props} />)

    // verifique se o title está sendo renderizado
    // -------------------------------------------
    expect(
      screen.getByRole('heading', { name: /Defy death/i })
    ).toBeInTheDocument()

    // verifique se o subtitle está sendo renderizado
    // ----------------------------------------------
    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument()

    // verifique se a imagem está sendo renderizada
    // --------------------------------------------
    expect(screen.getByRole('img', { name: /Defy death/i })).toBeInTheDocument()
  })
})
