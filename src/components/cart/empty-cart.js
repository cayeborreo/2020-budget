import React, { Fragment } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMeh } from "@fortawesome/free-solid-svg-icons"

const EmptyCart = () => (
  <Fragment>
    <FontAwesomeIcon icon={faMeh} size="6x" className="mb-2 has-text-purple" />
    <p className="is-size-1 has-text-grey">
      <b>Waley?!</b>
    </p>
    <p className="is-size-5 has-text-grey">
      Galingan mo naman sizt, 8.2 billion ’yan. ’Wag ka na mahiya.
    </p>
  </Fragment>
)

export default EmptyCart
