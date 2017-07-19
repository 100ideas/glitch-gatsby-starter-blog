import React from "react"
import Link from "gatsby-link"
import { Container } from "react-responsive-grid"

import { rhythm, scale } from "../utils/typography"

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header, footer
    let pENV = process.env
    if (location.pathname === "/") {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: "none",
              textDecoration: "none",
              color: "inherit",
            }}
            to={"/"}
          >
            Gatsby Starter Blog
          </Link>
        </h1>
      )
      footer = (
        <footer style={{textAlign: "center"}}>
          <a href={`https://${process.env.GLITCH_URL}/___graphql`}>
            graphql console
          </a>
          <img src="https://cdn.glitch.com/bdfc8122-4cab-49af-be19-8cdb52c71a6e%2Fgatsbyjs-gatsby-issues-1172-figma.png?1500107147123" />
        </footer>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: "Montserrat, sans-serif",
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: "none",
              textDecoration: "none",
              color: "inherit",
            }}
            to={"/"}
          >
            Gatsby Starter Blog
          </Link>
        </h3>
      )
      footer = (<footer> </footer>)
    }
    return (
      <Container
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children()}
        {footer}
      </Container>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template