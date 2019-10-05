import React from "react"
import { formatNumber } from "../services/util"
import Input from "./input"

const Card = ({ name, price, imgUrl, description }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={
              !!imgUrl
                ? imgUrl
                : "https://bulma.io/images/placeholders/1280x960.png"
            }
            alt="Placeholder"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{name}</p>
            <p className="subtitle is-4">₱ {formatNumber(price)}</p>
          </div>
        </div>

        <div className="content">{description}</div>
      </div>

      <div className="card-footer">
        <Input />
      </div>
    </div>
  )
}

export default Card
