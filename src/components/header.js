import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

import Icon from "./icon"

const Header = ({ siteTitle }) => (
  <nav
    className="has-background-light"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="columns is-centered pt-1">
      <div className="column is-12-mobile is-10-tablet is-8-desktop">
        <div className="columns is-mobile is-vcentered">
          <div className="column">
            <div className="ml-1 has-text-weight-bold">
              <Link to="/">{siteTitle}</Link>
            </div>
          </div>

          <div className="column is-narrow">
            <button className="button is-primary mr-1">
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* <div id="navbarShoppingSpree" className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          
        </div>
      </div>
    </div> */}
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
