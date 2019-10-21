import React, { useContext, useEffect } from "react"
import { AppContext } from "../context/app-context"
import { Link } from "gatsby"
import AOS from "aos"

// import { useStaticQuery, graphql } from "gatsby"
import items from "../components/shop/alternativeItems.json"
import Layout from "../components/layout/layout"
import Card from "../components/shop/card"
import Input from "../components/shop/input"
import SEO from "../components/layout/seo"
import PageHeader from "../components/layout/page-header"

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

  // Reusable function that will compute the value of the wallet based on the given cart
  const computeWallet = currentCart => {
    // Compute for total
    let prices = Object.keys(currentCart)
    let total = prices.reduce((accumulator, currentValue) => {
      return (
        parseInt(accumulator) +
        parseInt(currentValue) * parseInt(currentCart[currentValue])
      )
    }, 0)

    // Return current wallet value
    return 8200000000 - parseInt(total)
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
        className="button is-light is-medium is-fullwidth"
        onClick={() => setState({ cart: {}, wallet: computeWallet({}) })}
      >
        Wait, I need a&nbsp;<span className="has-text-danger">reset</span>
      </button>
    </Layout>
  )
}

export default Shop
