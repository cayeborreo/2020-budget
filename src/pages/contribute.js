import React, { useState, Fragment } from "react"
import classNames from "classnames"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCommentDots, faCheckCircle } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import PageHeader from "../components/layout/page-header"

export const Input = ({
  onChange,
  isTextArea,
  label,
  placeholder,
  type,
  name,
  min,
  maxLength,
  required,
  showErrors,
}) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        {isTextArea ? (
          <Fragment>
            <textarea
              className={classNames("textarea", { "is-danger": showErrors })}
              name={name}
              min={min}
              maxLength={maxLength}
              placeholder={placeholder}
              onChange={onChange}
              required={required}
            />
            {showErrors && (
              <p className={classNames("help is-danger")}>Required 'to, siz.</p>
            )}
          </Fragment>
        ) : (
          <Fragment>
            <input
              className={classNames("input", { "is-danger": showErrors })}
              type={type}
              name={name}
              min={min}
              maxLength={maxLength}
              placeholder={placeholder}
              onChange={onChange}
              required={required}
            />
            {showErrors && (
              <p className={classNames("help is-danger")}>Required 'to, siz.</p>
            )}
          </Fragment>
        )}
      </div>
    </div>
  )
}

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export const Success = ({ onClick }) => (
  <div className="column" data-aos="fade-up">
    <center>
      <FontAwesomeIcon
        icon={faCheckCircle}
        size="6x"
        className="mb-2 has-text-success"
      />
      <p className="is-size-1 has-text-grey">
        <b>Sajeschown submitted</b>
      </p>
      <p className="is-size-5 has-text-grey">
        Shelemz for the tip! (We update on Saturdays, check back soon na lang
        cyst.)
      </p>

      <button
        className="button is-fullwidth is-large mt-3 is-primary"
        onClick={onClick}
      >
        Contribute again
      </button>
    </center>
  </div>
)

const Contribute = () => {
  const [state, setState] = useState({})
  const [complete, setComplete] = useState(false)
  const [errors, setErrors] = useState([])

  const handleChange = e => {
    const form = e.target

    if (e.currentTarget.checkValidity()) {
      // This means input is validated!
      if (errors.includes(form.name)) {
        // If input is previously said to be invalid, we have to remove it now,
        // because they're filled out nicely already
        const index = errors.indexOf(form.name)
        errors.splice(index, 1)
      }
    } else {
      // This means input is not validated!
      if (!errors.includes(form.name)) {
        // We only add to the errors array if they're not there already
        setErrors([...errors, form.name])
      }
    }
    setState({ ...state, [form.name]: form.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    if (form.checkValidity()) {
      // form is valid! We can parse and submit data
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...state,
        }),
      })
        .then(() => {
          setComplete(true)
          setErrors([])
          setState({})
        })
        .catch(error => alert(error))
    }
  }

  const disableSubmit = () => {
    const keys = Object.keys(state)
    if (
      keys.includes("itemName") &&
      keys.includes("price") &&
      keys.includes("caption") &&
      errors.length === 0
    ) {
      return false
    } else return true
  }

  return (
    <Layout>
      <SEO title="Contribute" />
      <PageHeader backRoute="/" pageTitle="Contribute!" />
      <div className="columns is-vcentered">
        {complete ? (
          <Success onClick={() => setComplete(false)} />
        ) : (
          <Fragment>
            <div className="column" data-aos="fade-up">
              <div className="content is-medium mt-0">
                Have an idea for more shopping items? Fill out the form below
                for kaments and sajeschownz!
              </div>
              <form
                name="contribute"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                noValidate
              >
                <input type="hidden" name="form-name" value="contribute" />
                <Input
                  onChange={handleChange}
                  label="Item name"
                  type="text"
                  name="itemName"
                  placeholder="Standard Funeral Package"
                  required
                  showErrors={errors.includes("itemName")}
                />
                <Input
                  onChange={handleChange}
                  label="Price in Php"
                  type="number"
                  min={0}
                  name="price"
                  placeholder="50,000"
                  required
                  showErrors={errors.includes("price")}
                />
                <Input
                  onChange={handleChange}
                  label="Caption"
                  type="text"
                  maxLength={100}
                  name="caption"
                  placeholder="You never know kailan ang next na Tokhang Operation."
                  isTextArea
                  required
                  showErrors={errors.includes("caption")}
                />
                <Input
                  onChange={handleChange}
                  label="Your Twitter handle (optional)"
                  type="text"
                  maxLength={16}
                  name="contributor"
                  placeholder="In case you want to be credited. e.g. @mcborreo"
                />
                <button
                  type="submit"
                  className="button is-primary is-medium is-fullwidth mt-3"
                  disabled={disableSubmit()}
                >
                  Submit
                </button>
              </form>
            </div>

            <div className="column is-hidden-mobile is-4" data-aos="fade-up">
              <center>
                <FontAwesomeIcon
                  icon={faCommentDots}
                  size="8x"
                  className="has-text-purple"
                />
              </center>
            </div>
          </Fragment>
        )}
      </div>
    </Layout>
  )
}

export default Contribute
