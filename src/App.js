import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import Context from './components/Context'
import './App.css'

const menuConstaints = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

class App extends Component {
  state = {
    darkTheme: false,
    activeMenu: menuConstaints.home,
  }

  onToggleTheme = () => {
    this.setState(prevState => ({
      darkTheme: !prevState.darkTheme,
    }))
  }

  onChangeMenu = constaint => {
    this.setState({
      activeMenu: constaint,
    })
  }

  render() {
    const {darkTheme, activeMenu} = this.state
    return (
      <Context.Provider
        value={{
          darkTheme,
          toggleTheme: this.onToggleTheme,
          menuConstaints,
          activeMenu,
          changeMenu: this.onChangeMenu,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </Context.Provider>
    )
  }
}
export default App
