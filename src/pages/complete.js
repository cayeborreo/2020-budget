import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import Twitter from "../images/twitter-square-brands.svg"
import Facebook from "../images/facebook-square-brands.svg"
import PageHeader from "../components/layout/page-header"

const Complete = () => {
  return (
    <Layout>
      <SEO title="Success" />
      <PageHeader backRoute="/cart" pageTitle="Success!" />
      <center>
        <FontAwesomeIcon
          icon={faCheckCircle}
          size="6x"
          className="mb-2 has-text-success"
        />
        <p className="is-size-1 is-size-4-mobile has-text-grey">
          <b>Congrashumaleyshons.</b>
        </p>
        <p className="is-size-5 has-text-grey">
          Now you know saan aabot ang 8.2 billion peso-budget ni OP.
        </p>

        <a className="button mt-4 mb-1 is-info is-fullwidth is-medium">
          <span className="icon mr-1">
            <img src={Twitter} className="has-text-white" />
          </span>
          Tweet my haul
        </a>
        <a
          className="button is-fullwidth is-medium has-text-white"
          style={{ backgroundColor: "#3b5998" }}
        >
          <span className="icon mr-1">
            <img src={Facebook} className="has-text-white" />
          </span>
          Share my haul on FB
        </a>
      </center>
    </Layout>
  )
}

export default Complete
