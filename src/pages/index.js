import React from "react"
import { Link } from "gatsby"
// import { Link, useStaticQuery } from "gatsby"
// import { graphql } from "graphql"
// import Img from "gatsby-image"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import presidentialPhoto from "../images/presidential-photo.jpg"
import pgh from "../images/pgh.jpg"

const IndexPage = () => {
  // const data = useStaticQuery(graphql`
  //   {
  //     presidentialPhoto: file(
  //       relativePath: { eq: "images/presidential-photo.jpg" }
  //     ) {
  //       childImageSharp {
  //         fluid(maxWidth: 800) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  // const presidentialPhoto = data.presidentialPhoto.childImageSharp.fluid
  // console.log(presidentialPhoto)
  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="title is-size-2">
        Hanggang saan aabot ang{" "}
        <span className="has-text-danger">8.2 billion pesos</span> mo?
      </h1>
      {/* <Img fluid={image} /> */}
      <center>
        <figure className="image is-3by2 my-3">
          <img
            src={presidentialPhoto}
            alt="Malacanang"
            title="Malacanang photo"
          />
        </figure>
      </center>
      <div className="content is-medium">
        <p>
          Kaka-approve lang noong Sep 6 ang budget na <b>8.2 billion pesos</b>{" "}
          para sa <b>Office of the President (OP)</b> this 2020.
        </p>
        <p>
          Hashtag <span className="has-text-info">#blessed</span> talaga ang OP,
          ’di tulad ng... halimbawa, ang Philippine General Hospital, na
          nagkaroon pa ng{" "}
          <a
            href="https://newsinfo.inquirer.net/1171702/pgh-budget-for-2020-cut-by-p456m"
            target="__blank"
            rel="noopener noreferrer"
          >
            budget cut na 456 million
          </a>
          .
        </p>
        <center>
          <figure className="image is-3by2 mb-0">
            <img
              src={pgh}
              alt="Kuha ni Richard Reyes para sa Philippine Daily Inquirer (https://newsinfo.inquirer.net/1171702/pgh-budget-for-2020-cut-by-p456m)"
              title="Kuha ni Richard Reyes para sa Philippine Daily Inquirer (https://newsinfo.inquirer.net/1171702/pgh-budget-for-2020-cut-by-p456m)"
            />
          </figure>
          <p className="is-size-7 mt-1 mb-2">
            Kuha ni Richard Reyes para sa{" "}
            <a
              href="https://newsinfo.inquirer.net/1171702/pgh-budget-for-2020-cut-by-p456m"
              target="__blank"
              rel="noopener noreferrer"
            >
              Philippine Daily Inquirer
            </a>
          </p>
        </center>
        <p>
          <b>ANYWAY, ayun.</b>{" "}
          <a
            href="https://newsinfo.inquirer.net/1161623/office-of-the-presidents-p8-2-b-2020-budget-gets-swift-house-ok"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wala pang anim na minutong pagtalakay
          </a>
          , aprubado na ’yung 8.2 billion OP budget. <b>Bongga!</b>
        </p>
        <p>
          Pero sa totoo lang, ang hirap isipin sa anim na minuto na ’yun kung
          ano nga ba ang mararating ng 8.2 billion pesos. Kaya dito natin
          tingnan.
        </p>

        <b className="is-size-4">Saan nga ba aabot ang 8.2 billion pesos mo?</b>
      </div>

      <center>
        <Link to="/shop">
          <button className="button is-primary is-large has-text-weight-bold my-3">
            Let’s go shopping!
          </button>
        </Link>
      </center>
    </Layout>
  )
}

export default IndexPage
