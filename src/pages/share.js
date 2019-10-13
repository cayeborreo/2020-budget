import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBullhorn } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import Twitter from "../images/twitter-square-brands.svg"
import Facebook from "../images/facebook-square-brands.svg"

const Share = () => {
  const url = `https://2020-budget.netlify.com/`

  const message = `I can buy you, your friends, and at least 3,000 Toyota Fortuners with the Presidential Budget. Ikaw, hanggang saan aabot ang 8.2 billion pesos mo?`
  const encodedMessage = encodeURIComponent(message)

  // Twitter stuff
  const encodedTwitterURL = encodeURIComponent(url)

  // FB stuff
  const fbURL = `${url}?utm_source=sharemyhaul&utm_medium=facebook&utm_campaign=sharemyhaul`
  const encodedFbURL = encodeURIComponent(fbURL)

  return (
    <Layout>
      <SEO title="Share" />
      {/* <PageHeader backRoute="/cart" pageTitle="Success!" /> */}
      <center>
        <FontAwesomeIcon
          icon={faBullhorn}
          size="6x"
          className="my-2 has-text-purple"
          style={{ transform: "rotate(-30deg)" }}
        />
        <p className="is-size-1 is-size-4-mobile has-text-grey">
          <b>Share on social media!</b>
        </p>
        <article className="message has-text-left is-small-mobile my-2">
          <div className="message-body">
            {message}{" "}
            <span className="has-text-purple">#PresidentialShoppingSpree</span>
          </div>
        </article>

        <a
          className="button mb-1 is-info is-fullwidth is-medium"
          href={`https://twitter.com/intent/tweet?text=${encodedMessage}&url=${encodedTwitterURL}&hashtags=PresidentialShoppingSpree`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="icon mr-1">
            <img src={Twitter} className="has-text-white" alt="Twitter" />
          </span>
          Tweet
        </a>
        <div
          className="fb-share-button"
          data-href={url}
          data-layout="button"
          data-size="large"
        >
          <a
            className="button is-fullwidth is-medium has-text-white"
            style={{ backgroundColor: "#3b5998" }}
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedFbURL}&quote=${encodedMessage}&amp;src=sdkpreparse`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="icon mr-1">
              <img src={Facebook} className="has-text-white" alt="Facebook" />
            </span>
            Share
          </a>
        </div>
      </center>
    </Layout>
  )
}

export default Share
