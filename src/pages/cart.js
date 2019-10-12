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
import { faWallet, faMoneyBill } from "@fortawesome/free-solid-svg-icons"
import { formatNumber } from "../components/services/util"

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
        <span className="icon has-text-success mx-1">
          <i>
            <FontAwesomeIcon icon={faMoneyBill} />
          </i>
        </span>
        <b>{formatNumber(state.wallet)}</b>
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
      <PageHeader backRoute="/shop" pageTitle="Your shopping cart:" />
      {mapCartItems()}
    </Layout>
  )
}

export default Cart
