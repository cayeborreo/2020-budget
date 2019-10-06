import React, { useContext } from "react"
import { AppContext } from "../context/app-context"

// import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout/layout"
import alternateItems from "../components/shop/alternateItems.json"
import Card from "../components/shop/card"
import Input from "../components/shop/input"

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
    const newCart = { ...state.cart, [name]: parseInt(value) }

    // Compute for total
    const prices = Object.keys(newCart)
    const total = prices.reduce((accumulator, currentValue) => {
      return (
        parseInt(accumulator) +
        parseInt(currentValue) * parseInt(newCart[currentValue])
      )
    }, 0)

    // Subtract from the wallet
    const newWallet = 10 - parseInt(total)

    setState({
      wallet: newWallet,
      cart: newCart,
    })

    console.log("After: ", state)
  }
  console.log(
    "Input 0: ",
    parseInt(state.cart[alternateItems[0].price]),
    state.wallet
  )
  console.log(
    "Input 1: ",
    parseInt(state.cart[alternateItems[1].price]),
    state.wallet
  )
  return (
    <Layout showMoneyCounter>
      <center>
        <p className="title mb-3 has-text-dark">
          Start your Presidential Shopping Spree!
        </p>
      </center>
      <div className="columns is-multiline">
        <div className="column is-4-fullhd is-6-tablet">
          <Card
            // id={index}
            name={alternateItems[0].label}
            price={alternateItems[0].price}
            description={alternateItems[0].description}
          >
            <Input
              handleInputChange={handleInputChange}
              name={alternateItems[0].price}
              value={state.cart[alternateItems[0].price] || 0}
              isDisabled={parseInt(alternateItems[0].price) > state.wallet}
            />
          </Card>
        </div>
        <div className="column is-4-fullhd is-6-tablet">
          <Card
            // id={index}
            name={alternateItems[1].label}
            price={alternateItems[1].price}
            description={alternateItems[1].description}
          >
            <Input
              handleInputChange={handleInputChange}
              name={alternateItems[1].price}
              value={state.cart[alternateItems[1].price] || 0}
              isDisabled={parseInt(alternateItems[1].price) > state.wallet}
            />
          </Card>
        </div>
      </div>
    </Layout>
  )
}

export default Shop
