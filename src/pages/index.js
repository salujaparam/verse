import React from "react"
import {graphql} from 'gatsby'
import StyledHero from '../components/StyledHero'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <StyledHero img={data.defaultBcg.childImageSharp.fluid}>
    </StyledHero>
    <h1>Welcome to verSe Gaming</h1>
    <p>Enjoy your stay.</p>
  </Layout>
)

export const query = graphql`
{
	defaultBcg:file(relativePath: {eq:"verse.jpeg"}){
    childImageSharp{
      fluid(quality: 90, maxWidth: 4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default IndexPage
