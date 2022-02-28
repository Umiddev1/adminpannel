import React, { createContext, useState } from "react";

export  const BigContext = createContext();

export function BigContextProvider({children}) {
  const [isBool, setIsBool] = useState(false)
  function handleBool() {
    setIsBool(true)
  }
  function handleBooll() {
    setIsBool(false)
  }
  const value = {
    isBool:isBool,
    handleBool:handleBool,
    handleBooll:handleBooll
  }
  return (
    <BigContext.Provider value={{value}}>
      {children}
    </BigContext.Provider>
  )
}