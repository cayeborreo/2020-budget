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
              />
            </p>

            <p className="image is-64x64 is-hidden-tablet">
              <img
                src={
                  !!imgUrl
                    ? imgUrl
                    : "https://bulma.io/images/placeholders/128x128.png"
                }
              />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p className="title is-3 is-4-mobile mb-1">
                {name || "Item Name"}
              </p>
              <div className="columns my-0 py-0">
                <div className="column py-0">
                  <span className="tag is-success is-large">
                    ₱ {formatNumber(price || 0)}
                  </span>
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
