import React from 'react'

const Context = React.createContext({
  darkTheme: false,
  toggleTheme: () => {},
  activeMenu: '',
  changeMenu: () => {},
  savedVideosList: [],
  saveVideo: () => {},
  removeVideo: () => {},
  findElement: () => {},
  updateElement: () => {},
})

export default Context
