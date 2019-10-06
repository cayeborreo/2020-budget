import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import classNames from "classnames"

import Header from "./header"
import Container from "./container"

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
      <main
        className={classNames("mt-2 mx-3", { "mb-5 pb-5": !!showMoneyCounter })}
      >
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
