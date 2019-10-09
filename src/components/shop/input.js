import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"

const Input = ({ value, type, name, handleInputChange, isDisabled }) => {
  const handleFocus = event => {
    event.target.select()
  }
  return (
    <div className="field has-addons m-2">
      <p className="control">
        <button
          type="button"
          className="button is-danger is-medium"
          onClick={handleInputChange}
          name={name}
          id="subtract"
          disabled={value === 0}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
      </p>
      <p className="control is-expanded">
        <input
          className="input is-medium has-text-centered"
          type="number"
          onKeyDown={event => {
            if (type === "number" && event.key === "e") event.preventDefault()
          }}
          name={name}
          value={value}
          onChange={handleInputChange}
          onFocus={handleFocus}
          min={0}
          id="input"
          disabled={isDisabled}
        />
      </p>
      <p className="control">
        <button
          type="button"
          className="button is-success is-medium"
          onClick={handleInputChange}
          name={name}
          id="add"
          disabled={isDisabled}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </p>
    </div>
  )
}

export default Input
