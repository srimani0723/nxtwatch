import React from 'react'

const Context = React.createContext({
  darkTheme: false,
  toggleTheme: () => {},
  activeMenu: '',
  changeMenu: () => {},
  savedVideosList: [],
  saveVideo: () => {},
  removeVideo: () => {},
})

export default Context
