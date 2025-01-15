import React, { createContext, useState } from 'react'

export const OpenMenuContext = createContext();

const MenuContextProvider = ({ children }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <OpenMenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
        {children}
      </OpenMenuContext.Provider>
    </>
  )
}

export default MenuContextProvider
