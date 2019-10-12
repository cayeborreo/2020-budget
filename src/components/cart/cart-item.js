import React from "react"
import { formatNumber } from "../services/util"

const CartItem = ({ name, price, quantity, imgUrl }) => {
  return (
    <div className="card mb-1">
      <div className="card-content">
        <article className="media">
          <figure className="media-left">
            <p className="image is-128x128 is-hidden-mobile">
              <img
                src={
                  !!imgUrl
                    ? imgUrl
                    : "https://bulma.io/images/placeholders/128x128.png"
                }
                alt={name}
              />
            </p>

            <p className="image is-64x64 is-hidden-tablet">
              <img
                src={
                  !!imgUrl
                    ? imgUrl
                    : "https://bulma.io/images/placeholders/128x128.png"
                }
                alt={name}
              />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p className="title is-4 mb-1">{name || "Item Name"}</p>
              <div className="columns my-0 py-0 is-mobile is-vcentered">
                <div className="column py-0">
                  <button className="button is-success is-medium-tablet is-outlined is-static has-text-weight-normal">
                    ₱ {formatNumber(price || 0)}
                  </button>
                </div>
                <div className="column py-0 has-text-right">
                  <p className="is-size-4 is-size-5-mobile">
                    × {formatNumber(quantity || 0)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* TO-DO: Delete cart item
      <div className="media-right">
        <button className="delete"></button>
      </div> */}
        </article>
      </div>
    </div>
  )
}

export default CartItem
