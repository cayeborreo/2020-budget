import React from "react"
import { formatNumber } from "../services/util"

const CartItem = ({ name, price, quantity, imgUrl }) => {
  return (
    <div className="card mb-1">
      <div className="card-content">
        <article className="media">
          <figure className="media-left">
            <p className="image is-128x128">
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
              <p className="is-size-3 has-text-weight-bold">
                {name || "Item Name"}
              </p>
            </div>
            <nav className="level">
              <div className="level-left">
                <div className="level-item">
                  <p className="is-size-4">₱ {formatNumber(price || 0)}</p>
                </div>
              </div>
              <div className="level-right">
                <div className="level-item">
                  <p className="is-size-4 mr-1">× {quantity || 0}</p>
                </div>
              </div>
            </nav>
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
