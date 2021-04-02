import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <section>
    <Container>
      <Menu></Menu>
    </Container>

    {children}

    <S.SectionFooter>
      <Container>
        <Footer></Footer>
      </Container>
    </S.SectionFooter>
  </section>
)

export default Base
