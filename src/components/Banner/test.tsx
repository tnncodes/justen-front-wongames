import { render, screen } from 'utils/test-utils'

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
    const { container } = render(<Banner {...props} />)

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

    // gerar snapshot
    // --------------
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a Ribbon', () => {
    render(
      <Banner
        {...props}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/My Ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
  })
})
