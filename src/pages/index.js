import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Container from "../components/layout/container"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <h1 className="title is-size-2 has-text-centered">
        Hanggang saan aabot ang
        <br />
        <span className="has-text-danger">8.2 billion pesos</span> mo?
      </h1>
    </Container>
  </Layout>
)

export default IndexPage
