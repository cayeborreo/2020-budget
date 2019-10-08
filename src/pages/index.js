import React from "react"
import { Link } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

const IndexPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     presidentialPhoto: file(relativePath: { eq: "presidential-photo.jpg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 800) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="title is-size-2 is-size-3-mobile">
        Hanggang saan aabot ang{" "}
        <span className="has-text-danger">8.2 billion pesos</span> mo?
      </h1>
      <div className="content is-medium">
        <p>
          <b>Walong bilyon</b>. ’Yan ang budget ng{" "}
          <b>Office of the President (OP)</b> this 2020, na{" "}
          <a
            href="https://newsinfo.inquirer.net/1161623/office-of-the-presidents-p8-2-b-2020-budget-gets-swift-house-ok"
            target="_blank"
            rel="noopener noreferrer"
          >
            approved in less than six minutes
          </a>{" "}
          ng House Panel.
        </p>
        <p>
          Para ’di tayo malula, dito natin tingnan:{" "}
          <b>Saan nga ba aabot ang 8.2 billion pesos mo?</b>
        </p>
      </div>

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
