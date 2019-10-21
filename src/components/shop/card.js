import React from "react"
import classNames from "classnames"
import { formatNumber } from "../services/util"

const Card = ({ name, price, imgUrl, description, isDisabled, children }) => {
  return (
    <div
      className={classNames("card", {
        "has-background-grey-lighter has-text-grey": isDisabled,
      })}
    >
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
      <div className="card-content is-shopping-card">
        <div className="media mb-1">
          <div className="media-content">
            <p
              className={classNames("title is-4 mb-1", {
                "has-text-grey": isDisabled,
              })}
            >
              {name}
            </p>
            <button
              className={classNames(
                "button has-text-weight-normal is-static is-outlined",
                {
                  "is-danger": isDisabled,
                },
                {
                  "is-success": !isDisabled,
                }
              )}
            >
              ₱ {formatNumber(price)}
            </button>
          </div>
        </div>

        <div className="content">{description}</div>
      </div>

      <div className="card-footer">
        <center>{children}</center>
      </div>
    </div>
  )
}

export default Card
