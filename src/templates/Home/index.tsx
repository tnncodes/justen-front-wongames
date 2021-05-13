import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import { Container } from 'components/Container'
import BannerSlider from 'components/BannerSlider'
import Showcase from 'components/Showcase'

import * as S from './styles'
import Base from 'templates/Base'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGamesTitle: string
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGamesTitle: string
  mostPopularGames: GameCardProps[]
  upcomingGamesTitle: string
  upcomingGames: GameCardProps[]
  upcomingHighligth: HighlightProps
  freeGamesTitle: string
  freeGames: GameCardProps[]
  freeHighligth: HighlightProps
}

const Home = ({
  banners,
  newGamesTitle,
  newGames,
  mostPopularHighlight,
  mostPopularGamesTitle,
  mostPopularGames,
  upcomingGamesTitle,
  upcomingGames,
  upcomingHighligth,
  freeGamesTitle,
  freeGames,
  freeHighligth
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title={newGamesTitle} games={newGames} />
    </S.SectionNews>

    <Showcase
      title={mostPopularGamesTitle}
      games={mostPopularGames}
      highlight={mostPopularHighlight}
      color="black"
    />

    <Showcase
      title={upcomingGamesTitle}
      games={upcomingGames}
      highlight={upcomingHighligth}
    />

    <Showcase
      title={freeGamesTitle}
      games={freeGames}
      highlight={freeHighligth}
    />
  </Base>
)

export default Home
