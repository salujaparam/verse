import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import {graphql, useStaticQuery} from 'gatsby'

const getImage = graphql`
query {
	defaultBcg:file(relativePath: {eq:"versee.jpeg"}){
    childImageSharp{
      fluid(quality: 90, maxWidth: 4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

const StyledHero = ({img, className, children, home}) => {

    const data = useStaticQuery(getImage);
    return (
        <div>
            <BackgroundImage className={className} fluid={img || data.defaultBcg.childImageSharp.fluid} home={home}>
                {children}
            </BackgroundImage>           
        </div>
    )
}

export default styled(StyledHero)`
    min-height: ${props => props.home?"calc(100vh - 62px)":"50vh"};
    background:${props => props.home?'linear-gradient(to bottom right,rgba(153, 153, 102, 0.7), rgba(102, 102, 153, 0.7))':'none'};
    background-position: center;
    background-size: cover;
    opacity: 1!important;
    display: flex;
    justify-content: center;
    align-items: center;
`
