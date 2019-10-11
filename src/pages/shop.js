import React, { useContext } from "react"
import { AppContext } from "../context/app-context"

// import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout/layout"
import items from "../components/shop/alternativeItems.json"
import Card from "../components/shop/card"
import Input from "../components/shop/input"
import SEO from "../components/layout/seo"
import { Link } from "gatsby"

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

    console.log("After: ", state)
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
      <center>
        <p className="title mb-3 has-text-dark">
          Start your Presidential Shopping Spree!
        </p>
      </center>
      <div className="columns is-multiline">
        <div className="column is-4-fullhd is-6-tablet">
          <Card
            // id={index}
            name={items[0].label}
            price={items[0].price}
            description={items[0].description}
          >
            <Input
              handleInputChange={handleInputChange}
              name={items[0].price}
              value={state.cart[items[0].price] || 0}
              isDisabled={parseInt(items[0].price) > state.wallet}
            />
          </Card>
        </div>
        <div className="column is-4-fullhd is-6-tablet">
          <Card
            // id={index}
            name={items[1].label}
            price={items[1].price}
            description={items[1].description}
          >
            <Input
              handleInputChange={handleInputChange}
              name={items[1].price}
              value={state.cart[items[1].price] || 0}
              isDisabled={parseInt(items[1].price) > state.wallet}
            />
          </Card>
        </div>
      </div>
      <Link className="button my-1 is-primary is-large is-fullwidth" to="/cart">
        Tapos na ako magwaldas
      </Link>
      <button className="button is-light is-medium is-fullwidth" onClick={() => setState({cart: {}, wallet: computeWallet({})})}>
        Wait, I need a&nbsp;<span className="has-text-danger">reset</span>
      </button>
    </Layout>
  )
}

export default Shop
