import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMeh } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

const EmptyCart = () => (
  <center>
    <FontAwesomeIcon icon={faMeh} size="6x" className="mb-2 has-text-purple" />
    <p className="is-size-1 has-text-grey">
      <b>Waley?!</b>
    </p>
    <p className="is-size-5 has-text-grey">
      Galingan mo naman sizt, 8.2 billion ’yan.
      <br />
      ’Wag ka na mahiya.
    </p>

    <Link to="/shop" className="button is-fullwidth is-large mt-3 is-primary">
      Back to shopping
    </Link>
  </center>
)

export default EmptyCart
