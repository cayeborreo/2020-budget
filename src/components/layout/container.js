import React from "react"

const Container = ({ children }) => {
  return (
    <div className="columns is-centered px-1">
      <div className="column is-12-mobile is-10-tablet is-6-desktop my-3">
        {children}
      </div>
    </div>
  )
}

export default Container
