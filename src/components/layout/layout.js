/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext, Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import classNames from "classnames"

import Header from "./header"
import Container from "./container"
import { AppContext } from "../../context/app-context"
import { formatNumber } from "../services/util"

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

  const [state] = useContext(AppContext)
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
          className={classNames("hero has-text-centered", {
            "is-success": !!state.wallet,
            "is-danger": state.wallet <= 0,
          })}
          style={{ position: "fixed", bottom: 0, width: "100%" }}
        >
          <div className="hero-body p-2">
            {state.wallet <= 0 ? (
              <Fragment>
                {/* <p>Meron ka pang natitirang:</p> */}
                <h1 className="title is-size-2">
                  ₱ {formatNumber(state.wallet)}{" "}
                  <Link to="/cart" className="button is-large is-primary">
                    Checkout na besh!
                  </Link>
                </h1>
              </Fragment>
            ) : (
              <Fragment>
                <p>Meron ka pang natitirang:</p>
                <h1 className="title is-size-2">
                  ₱ {formatNumber(state.wallet)}
                </h1>
              </Fragment>
            )}
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
