import React, { useContext, Fragment } from "react"
import { Link } from "gatsby"

import { AppContext } from "../context/app-context"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import EmptyCart from "../components/cart/empty-cart"
import CartItem from "../components/cart/cart-item"

const Cart = () => {
  const [state] = useContext(AppContext)
  console.log(state)
  return (
    <Layout>
      <SEO title="Cart" />
      <center>
        <p className="title has-text-dark mb-4">Your shopping cart so far:</p>

        {/* <EmptyCart />
        <CartItem /> */}
        <CartItem />

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
