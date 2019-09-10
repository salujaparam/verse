import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledHero from '../components/StyledHero'

const About = ({data}) => (
  <Layout>
    <SEO title="About" />
    <StyledHero img={data.defaultBcg.childImageSharp.fluid}>
    </StyledHero>
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

export default About
