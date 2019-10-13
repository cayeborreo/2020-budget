import React, { useContext, Fragment } from "react"
import { Link } from "gatsby"

import { AppContext } from "../context/app-context"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import EmptyCart from "../components/cart/empty-cart"
import CartItem from "../components/cart/cart-item"

import productList from "../components/shop/alternativeItems.json"
import PageHeader from "../components/layout/page-header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons"
import { formatNumber, getCartIds } from "../components/services/util"

const Cart = () => {
  const [state] = useContext(AppContext)

  const RenderCartItems = ({ cartItems }) => (
    <Fragment>
      <center>
        {cartItems.map((item, index) => (
          <CartItem
            key={index}
            name={item.label}
            price={item.price}
            quantity={item.quantity}
            imgUrl={item.imgurl}
          />
        ))}
      </center>
      <div className="content mt-2 is-medium">
        May sukli ka pang:
        <div className="has-text-success">
          <FontAwesomeIcon icon={faMoneyBill} />
          <b className="ml-1 has-text-dark is-size-3-tablet">
            {formatNumber(state.wallet)}
          </b>
        </div>
      </div>
      <Link
        to="/complete"
        className="button is-success is-large is-fullwidth mt-3"
      >
        Finish shopping
      </Link>
    </Fragment>
  )

  const mapCartItems = () => {
    const filteredCart = getCartIds(state.cart)

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
      <PageHeader backRoute="/shop" pageTitle="Your shopping cart:" />
      {mapCartItems()}
    </Layout>
  )
}

export default Cart
