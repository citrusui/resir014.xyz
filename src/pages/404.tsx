import * as React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import { colors, fonts } from '../styles/variables'
import { media } from '../styles/mixins'
import { SiteAuthor } from '../utils/types'

import Page from '../components/page/Page'
import PostHeader from '../components/post/PostHeader'
import PostMeta from '../components/post/PostMeta'
import PageTitle from '../components/page/PageTitle'
import PageContent from '../components/page/PageContent'
import Container from '../components/ui/Container'

const PageWrapper = styled(Page)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  background-color: ${colors.ink90};
`

const PageInner = styled.div`
  a {
    color: ${colors.blue40};
  }

  h1 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 600;
    line-height: 1.2;
    font-family: ${fonts.sansSerif};
    font-size: 2.074rem;

    ${media.md`
      font-size: 2.441rem;
    `} ${media.lg`
      font-size: 3.157rem;
    `}

    span {
      display: inline-block;
      margin: 0;
      padding: 0 0.5rem;
      background-color: ${colors.white};
      color: ${colors.ink90};
    }
  }

  p {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 300;
  }
`

interface NotFoundPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteUrl: string
        author: SiteAuthor
      }
    }
  }
}

const NotFoundPage: React.SFC<NotFoundPageProps> = ({ data }) => (
  <Page>
    <Helmet
      title={`404: Page not found. · ${data.site.siteMetadata.title}`}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { property: 'og:title', content: '404: Page not found.' },
        {
          property: 'og:description',
          content: data.site.siteMetadata.description
        }
      ]}
    />
    <article>
      <PostHeader>
        <PostMeta>
          <PageTitle>404.</PageTitle>
        </PostMeta>
      </PostHeader>
      <PageContent>
        <Container>
          <PageInner>
            <p className="lead">
              You've hit the void. <Link to="/">Go back home.</Link>
            </p>
          </PageInner>
        </Container>
      </PageContent>
    </article>
  </Page>
)

export default NotFoundPage

export const query = graphql`
  query NotFoundPageQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
        author {
          name
          description
          website
          email
          url {
            twitter
            instagram
            tumblr
            github
          }
        }
      }
    }
  }
`
