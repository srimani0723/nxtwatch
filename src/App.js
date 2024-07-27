import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Context from './components/Context'
import './App.css'

// Replace your code here
class App extends Component() {
  state = {
    darkTheme: false,
  }

  onToggleTheme = () => {
    this.setState(prevState => ({
      darkTheme: !prevState.darkTheme,
    }))
  }

  render() {
    const {darkTheme} = this.state
    return (
      <Context.Provider value={{darkTheme, toggleTheme: this.onToggleTheme}}>
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
      </Context.Provider>
    )
  }
}
export default App
