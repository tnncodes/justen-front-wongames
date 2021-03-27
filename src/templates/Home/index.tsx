import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import Highlight, { HighlightProps } from 'components/Highlight'
import GameCardSlider from 'components/GameCardSlider'
import BannerSlider from 'components/BannerSlider'

import { Container } from 'components/Container'
import Menu from 'components/Menu'
import Heading from 'components/Heading'
import Footer from 'components/Footer'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighligth: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighligth: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighligth,
  freeGames,
  freeHighligth
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <BannerSlider items={banners} />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="black">
        News
      </Heading>

      <GameCardSlider items={newGames} color="black" />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Most Popular
      </Heading>

      <Highlight {...mostPopularHighlight} />
      <GameCardSlider items={mostPopularGames} color="white" />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Upcomming
      </Heading>

      <GameCardSlider items={upcommingGames} />
      <Highlight {...upcommingHighligth} />
      <GameCardSlider items={upcommingGames} />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Free Games
      </Heading>

      <Highlight {...freeHighligth} />
      <GameCardSlider items={freeGames} />
    </Container>

    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home
