import React, { useContext, Fragment } from "react"
import { Link } from "gatsby"

import { AppContext } from "../context/app-context"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import EmptyCart from "../components/cart/empty-cart"
import CartItem from "../components/cart/cart-item"

import productList from "../components/shop/alternativeItems.json"

const Cart = () => {
  const [state] = useContext(AppContext)

  const RenderCartItems = ({ cartItems }) => (
    <Fragment>
      {cartItems.map((item, index) => (
        <CartItem
          key={index}
          name={item.label}
          price={item.price}
          quantity={item.quantity}
          imgUrl={item.imgurl}
        />
      ))}
    </Fragment>
  )

  const mapCartItems = () => {
    // Sometimes keys (price/id) have 0 as value (quantity); need to filter those out
    const filteredCart = Object.keys(state.cart).filter(
      item => state.cart[item] > 0
    )

    if (filteredCart.length > 0) {
      let cartItems = []

      filteredCart.forEach(item => {
        let searchedObject = productList.filter(
          product => product.price === parseInt(item)
        )

        cartItems.push({ ...searchedObject[0], quantity: state.cart[item] })
      })

      return <RenderCartItems cartItems={cartItems} />
    } else return <EmptyCart />
  }

  return (
    <Layout>
      <SEO title="Cart" />
      <center>
        <p className="title has-text-dark mb-4">Your shopping cart:</p>

        {mapCartItems()}

        <Link
          to="/shop"
          className="button is-primary is-large is-fullwidth mt-3"
        >
          Back to shopping
        </Link>
      </center>
    </Layout>
  )
}

export default Cart
