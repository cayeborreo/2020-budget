import React, { useContext } from "react"
// import { Form, Formik } from "formik"
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

  const handleAdd = event => {
    const target = event.currentTarget
    console.log(target.type)
    // console.log(input, input.value)
    // setState(cart)
  }

  const handleSubtract = event => {
    console.log("- me no", state)
  }

  const handleInputChange = event => {
    const target = event.currentTarget
    const name = target.name
    const value = !!target.value ? parseInt(target.value) : 0

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
    const newWallet = 8200000000 - parseInt(total)

    setState({
      wallet: newWallet,
      cart: newCart,
    })
  }

  return (
    <Layout showMoneyCounter>
      <center>
        <p className="title my-3 has-text-dark">
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
              handleAdd={handleAdd}
              handleSubtract={handleSubtract}
              handleInputChange={handleInputChange}
              name={alternateItems[0].price}
              defaultValue={0}
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
              handleAdd={handleAdd}
              handleSubtract={handleSubtract}
              handleInputChange={handleInputChange}
              name={alternateItems[1].price}
              defaultValue={0}
            />
          </Card>
        </div>
      </div>
      <center>
        <button type="submit" className="button is-large is-primary">
          Submit
        </button>
      </center>
      {/* </Form>
        )}
      /> */}
      {/* ))} */}
      {/* </form>
      </Formik> */}
    </Layout>
  )
}

export default Shop
