import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"

const Input = ({ value }) => {
  return (
    <div className="field p-2 has-addons is-expanded">
      <p className="control">
        <button className="button is-danger is-medium">
          <FontAwesomeIcon icon={faMinus} />
        </button>
      </p>
      <p className="control">
        <input
          className="input has-text-centered is-medium"
          type="number"
          placeholder=1000
          value={value}
        />
      </p>
      <p className="control">
        <button className="button is-success is-medium">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </p>
    </div>
  )
}

export default Input
