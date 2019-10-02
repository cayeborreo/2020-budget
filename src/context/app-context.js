import React, { useState } from "react"

const initialState = {}
const AppContext = React.createContext(initialState)

const AppProvider = ({ children }) => {
  const [state, setState] = useState({})
  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
