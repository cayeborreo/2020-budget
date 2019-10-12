import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="title is-size-2 is-size-3-mobile my-5">
        Hanggang saan aabot ang{" "}
        <span className="has-text-danger">8.2 billion pesos</span> mo?
      </h1>

      <center>
        <Link to="/shop">
          <button className="button is-primary is-large my-1 is-fullwidth">
            Let’s go shopping!
          </button>
        </Link>
        <Link to="/bakit">
          <button className="button mb-3 is-fullwidth">
            8.2 billion?! Ano’ng chika non???
          </button>
        </Link>
      </center>
    </Layout>
  )
}

export default IndexPage
