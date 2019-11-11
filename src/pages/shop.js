import React, { useContext } from "react"
import { AppContext } from "../context/app-context"

import { Link, useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import { computeWallet } from "../components/services/util"

import items from "../components/shop/alternativeItems.json"
import Layout from "../components/layout/layout"
import Card from "../components/shop/card"
import Input from "../components/shop/input"
import SEO from "../components/layout/seo"
import PageHeader from "../components/layout/page-header"
// import { shopImagesQuery } from "../components/services/shopQuery"

const Shop = () => {
  // const data = useStaticQuery(graphql`
  //   {
  //     allGoogleSheetShoppingItemsRow {
  //       nodes {
  //         imgurl
  //         label
  //         price
  //         description
  //       }
  //     }
  //   }
  // `)

  // const items = data.allGoogleSheetShoppingItemsRow.nodes
  // console.log(items)

  const data = useStaticQuery(graphql`
    query {
      polioVax: file(relativePath: { eq: "shop/polioVax.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      palay: file(relativePath: { eq: "shop/palay.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      losartan: file(relativePath: { eq: "shop/losartan.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      starbucksFrappe: file(relativePath: { eq: "shop/starbucksFrappe.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beerBucket: file(relativePath: { eq: "shop/beerBucket.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vanGoghAlive: file(relativePath: { eq: "shop/vanGoghAlive.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nintendoSwitch: file(relativePath: { eq: "shop/nintendoSwitch.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nintendoSwitchGames: file(
        relativePath: { eq: "shop/nintendoSwitchGames.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      iphoneX: file(relativePath: { eq: "shop/iphoneX.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      standardFuneralPackage: file(
        relativePath: { eq: "shop/standardFuneralPackage.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      macbookPro: file(relativePath: { eq: "shop/macbookPro.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      researchGrant: file(relativePath: { eq: "shop/researchGrant.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cartierDiamondRing: file(
        relativePath: { eq: "shop/cartierDiamondRing.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      modernJeepney: file(relativePath: { eq: "shop/modernJeepney.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      toyotaFortuner: file(relativePath: { eq: "shop/toyotaFortuner.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      condoUnit: file(relativePath: { eq: "shop/condoUnit.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      houseAndLot: file(relativePath: { eq: "shop/houseAndLot.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ninjaCopBribe: file(relativePath: { eq: "shop/ninjaCopBribe.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      presidentialJet: file(relativePath: { eq: "shop/presidentialJet.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [state, setState] = useContext(AppContext)

  const handleInputChange = event => {
    const target = event.currentTarget
    const name = target.name
    let value

    if (target.id === "input") {
      value = !!target.value ? parseInt(target.value) : 0
    } else if (target.id === "subtract") {
      value = !!state.cart[name] ? parseInt(state.cart[name] - 1) : 0
    } else if (target.id === "add") {
      value = !!state.cart[name] ? parseInt(state.cart[name] + 1) : 1
    } else value = 0

    // Replacing cart with new quantity
    // { price: quantity } format
    let newCart = { ...state.cart, [name]: parseInt(value) }
    const newWallet = computeWallet(newCart)

    // Check if computed wallet value is > 0
    // If yes, continue
    // If not, recompute the wallet based on the maximum allowable quantity for the selected item
    if (newWallet < 0) {
      newCart = {
        ...newCart,
        [name]: Math.floor(
          newCart[name] - Math.abs(newWallet) / parseInt(name)
        ),
      }
      setState({
        wallet: computeWallet(newCart),
        cart: newCart,
      })
    } else {
      setState({
        wallet: newWallet,
        cart: newCart,
      })
    }
  }

  return (
    <Layout showMoneyCounter>
      <SEO title="Shop" />
      <PageHeader
        backRoute="/"
        pageTitle="Start your Presidential Shopping Spree!"
      />
      <div className="columns is-multiline">
        {items.map((item, index) => (
          <div className="column is-4-fullhd is-6-tablet" key={index}>
            <Card
              name={item.label}
              price={item.price}
              description={item.description}
              imgUrl={item.imgurl}
              isDisabled={parseInt(item.price) > state.wallet}
              imgQuery={data[item.filename].childImageSharp.fluid}
            >
              <Input
                handleInputChange={handleInputChange}
                name={item.price}
                value={state.cart[item.price] || 0}
                isDisabled={parseInt(item.price) > state.wallet}
              />
            </Card>
          </div>
        ))}
      </div>
      <Link className="button my-1 is-primary is-large is-fullwidth" to="/cart">
        Tapos na ako magwaldas
      </Link>
      <button
        className="button is-danger is-outlined is-medium is-fullwidth mt-1"
        onClick={() => setState({ cart: {}, wallet: computeWallet({}) })}
      >
        Wait, I need a reset
      </button>
    </Layout>
  )
}

export default Shop
