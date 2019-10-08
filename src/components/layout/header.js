import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

// import Icon from "./icon"

const Header = ({ siteTitle }) => (
  <nav
    className="px-2"
    role="navigation"
    aria-label="main navigation"
    style={{
      position: "fixed",
      width: "100%",
      top: 0,
      zIndex: 9,
      backgroundColor: "#663399",
      color: "white",
    }}
  >
    <div className="columns is-centered py-1">
      <div className="column is-12-mobile is-10-tablet is-6-desktop">
        <div className="columns is-mobile is-vcentered">
          <div className="column">
            <div className="ml-1 has-text-weight-bold is-size-5">
              {/* <span className="icon">
                <Icon />
              </span> */}
              <Link to="/">{siteTitle}</Link>
            </div>
          </div>

          <div className="column is-narrow">
            <Link className="button is-primary mr-1 is-large" to="/cart">
              <span className="icon is-large">
                <FontAwesomeIcon icon={faShoppingCart} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
