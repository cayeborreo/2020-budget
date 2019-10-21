/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext, useEffect, Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import AOS from "aos"
import classNames from "classnames"

import "aos/dist/aos.css"

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

  useEffect(() => {
    AOS.init({
      delay: 100,
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main
        className={classNames("m-1", {
          "mb-5 pb-5": !!showMoneyCounter,
        })}
        data-aos="fade-up"
      >
        <Container>{children}</Container>
      </main>

      {showMoneyCounter && (
        <div
          className={classNames("hero has-text-centered", {
            "is-success": !!state.wallet,
            "is-danger": state.wallet < 170,
          })}
          style={{ position: "fixed", bottom: 0, width: "100%" }}
          data-aos="slide-up"
          data-delay={500}
          data-offset={-800}
        >
          <div className="hero-body p-1">
            {state.wallet < 170 ? (
              <Fragment>
                {/* <p>Meron ka pang natitirang:</p> */}
                <h1 className="title is-size-1 is-size-2-mobile">
                  ₱ {formatNumber(state.wallet)}{" "}
                  <Link to="/cart" className="ml-2 button is-large is-primary">
                    Checkout na besh!
                  </Link>
                </h1>
              </Fragment>
            ) : (
              <Fragment>
                <p>Meron ka pang natitirang:</p>
                <h1 className="title is-size-1 is-size-2-mobile">
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
