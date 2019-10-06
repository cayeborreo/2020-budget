import React from "react"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"

const Input = ({
  value,
  type,
  name,
  handleSubtract,
  handleAdd,
  handleInputChange,
}) => {
  const handleFocus = event => {
    event.target.select()
  }
  const handleBlur = event => {
    // const value = event.target.value
    // if (value === "") {
    //   event.target.value = 0
    //   handleInputChange(event)
    // }
  }
  return (
    <div className="field p-2 has-addons is-expanded">
      {/* <p className="control">
        <button
          type="button"
          className="button is-danger is-medium"
          onClick={handleSubtract}
          name={name}
          value={value}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
      </p> */}
      <p className="control">
        <input
          className="input is-medium has-text-centered"
          type="number"
          onKeyDown={event => {
            if (type === "number" && event.key === "e") event.preventDefault()
          }}
          name={name}
          value={value}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          defaultValue={0}
        />
      </p>
      {/* <p className="control">
        <button
          type="button"
          className="button is-success is-medium"
          onClick={handleAdd}
          name={name}
          value={value}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </p> */}
    </div>
  )
}

export default Input
