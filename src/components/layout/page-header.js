import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

const PageHeader = ({ backRoute, pageTitle }) => {
  return (
    <div className="columns is-mobile">
      <div className="column is-narrow">
        <Link className="button is-primary" to={backRoute}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </div>
      <div className="column">
        <p className="title has-text-dark mb-2">{pageTitle}</p>
      </div>
    </div>
  )
}

export default PageHeader
