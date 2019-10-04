import React from "react"

const Container = ({ children }) => {
  return (
    <div className="columns is-centered px-1">
      <div className="column is-12-mobile is-10-tablet is-8-desktop">
        {children}
      </div>
    </div>
  )
}

export default Container
