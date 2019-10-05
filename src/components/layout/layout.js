/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Container from "./container"
// import Container from "./container"

const Layout = ({ children, showMoneyCounter }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="mt-2 mx-3">
        <Container>{children}</Container>
      </main>

      {showMoneyCounter && (
        <div
          className="hero is-success has-text-centered"
          style={{ position: "fixed", bottom: 0, width: "100%" }}
        >
          <div className="hero-body p-2">
            <p>Meron ka pang natitirang:</p>
            <h1 className="title is-size-2">₱ 8,200,000,000</h1>
          </div>
        </div>
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
