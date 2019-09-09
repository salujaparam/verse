import React from "react"
import {graphql} from 'gatsby'
import StyledHero from '../components/StyledHero'
import Games from '../components/Games'
import Players from '../components/Players'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <StyledHero img={data.defaultBcg.childImageSharp.fluid}>
    </StyledHero>
    <Games />
    <Players />
  </Layout>
)

export const query = graphql`
{
	defaultBcg:file(relativePath: {eq:"vers.jpeg"}){
    childImageSharp{
      fluid(quality: 90, maxWidth: 4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default IndexPage
