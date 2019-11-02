import React, { useContext } from "react"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import PageHeader from "../components/layout/page-header"
import { AppContext } from "../context/app-context"

import Twitter from "../images/twitter-square-brands.svg"
import Facebook from "../images/facebook-square-brands.svg"
import {
  getCartIds,
  generateRandomIndex,
  formatNumber,
} from "../components/services/util"
import productList from "../components/shop/alternativeItems.json"

const Complete = () => {
  const [state] = useContext(AppContext)
  const cart = state.cart
  const url = `https://2020-budget.netlify.com/`

  const cartIds = getCartIds(cart)
  let item, quantity, imgurl

  if (cartIds.length > 0) {
    // I want to pick a random item from the User's shopping cart
    // and add it to the message User will share with their social media
    const randomIndex = generateRandomIndex(cartIds.length)

    const sampleItem = productList.filter(
      product => product.price === parseInt(cartIds[randomIndex])
    )[0]

    quantity = formatNumber(cart[sampleItem.price])
    item = parseInt(quantity) > 1 ? `${sampleItem.label}'s` : sampleItem.label
    imgurl = sampleItem.imgurl
  } else {
    quantity = "3,000"
    item = "Toyota Fortuners"
    imgurl =
      "https://images.unsplash.com/photo-1566367576585-051277d52997?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  }

  const message = `I can buy you, your friends, and at least ${quantity} ${item} with the Presidential Budget. Ikaw, hanggang saan aabot ang 8.2 billion pesos mo?`
  const encodedMessage = encodeURIComponent(message)

  // Twitter stuff
  const encodedTwitterURL = encodeURIComponent(url)

  // FB stuff
  const fbURL = `${url}?utm_source=sharemyhaul&utm_medium=facebook&utm_campaign=sharemyhaul`
  const encodedFbURL = encodeURIComponent(fbURL)

  return (
    <Layout>
      <SEO title="Success" />
      <PageHeader backRoute="/cart" pageTitle="Success!" />
      <center data-aos="fade-up">
        <p className="is-size-1 is-size-4-mobile has-text-grey">
          <b>Congrashumaleyshons.</b>
        </p>
        <p className="is-size-5 has-text-grey">
          Go forth at ipagmayabang ang shopping powers mo.
        </p>
        <div className="columns mt-2">
          <div className="column">
            <figure className="image is-4by3">
              <img src={imgurl} alt={item} />
            </figure>
          </div>

          <div className="column">
            <article className="message has-text-left is-medium mb-1">
              <div className="message-body">
                {message}{" "}
                <span className="has-text-purple">
                  <a
                    href="https://twitter.com/hashtag/PresidentialShoppingSpree"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    #PresidentialShoppingSpree
                  </a>
                </span>
              </div>
            </article>
          </div>
        </div>

        <a
          className="button mb-1 is-info is-fullwidth is-medium"
          href={`https://twitter.com/intent/tweet?text=${encodedMessage}&url=${encodedTwitterURL}&hashtags=PresidentialShoppingSpree`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="icon mr-1">
            <img src={Twitter} className="has-text-white" alt="Twitter" />
          </span>
          Tweet my haul
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
            Share my haul
          </a>
        </div>
      </center>
    </Layout>
  )
}

export default Complete
