import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="title is-size-2 has-text-centered mt-3">
      Hanggang saan aabot ang
      <br />
      <span className="has-text-danger">8.2 billion pesos</span> mo?
    </h1>

    <div className="content is-medium">
      Kaunting website copy here explaining bakit nga ba natin ginawa ang
      website na to
    </div>

    <center>
      <Link to="/shop">
        <button className="button is-primary is-large has-text-weight-bold my-5">
          Let's go shopping!
        </button>
      </Link>
    </center>
  </Layout>
)

export default IndexPage
