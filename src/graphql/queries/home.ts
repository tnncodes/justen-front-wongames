import { gql } from '@apollo/client'
import { BannerFragment } from 'graphql/fragments/banner'
import { GameFragment } from 'graphql/fragments/game'
import { HighLightFragment } from 'graphql/fragments/highlight'

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      ...BannerFragment
    }

    newGames: games(
      where: { release_date_lte: "2021-01-27" }
      sort: "release_date:desc"
      limit: 8
    ) {
      ...GameFragment
    }

    upcomingGames: games(
      where: { release_date_gt: "2021-01-27" }
      sort: "release_date:asc"
      limit: 8
    ) {
      ...GameFragment
    }

    freeGames: games(where: { price: 0 }, sort: "release_date:asc", limit: 8) {
      ...GameFragment
    }

    sections: home {
      newGames {
        title
        highlight {
          ...HighlightFragment
        }
      }

      popularGames {
        title
        highlight {
          ...HighlightFragment
        }
        games(limit: 8) {
          ...GameFragment
        }
      }

      upcomingGames {
        title
        highlight {
          ...HighlightFragment
        }
      }

      freeGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
    }
  }

  ${BannerFragment}
  ${GameFragment}
  ${HighLightFragment}
`
