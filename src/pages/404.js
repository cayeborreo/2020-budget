import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <center>
      <p className="title has-text-dark mb-4">Nahihilo? Nalilito?</p>
      <FontAwesomeIcon
        icon={faHeartBroken}
        size="6x"
        className="mb-2 has-text-purple"
      />
      <p className="is-size-1 has-text-grey">
        <b>Error 404</b>
      </p>
      <p className="is-size-5 has-text-grey">
        Just like the Perfect President, this page does not exist.
      </p>
      <Link to="/" className="button is-primary is-large is-fullwidth mt-3">
        Back to Home
      </Link>
    </center>
  </Layout>
)

export default NotFoundPage
