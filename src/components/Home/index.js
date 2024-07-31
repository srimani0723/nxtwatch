import {Component} from 'react'

import Header from '../Header'
import SideNavbar from '../SideNavbar'

import {Div, Para} from './styledcomponents'

class Home extends Component {
  state = {}

  render() {
    return (
      <Div flex="column">
        <Header />
        <Div flex="row">
          <SideNavbar />
        </Div>
      </Div>
    )
  }
}

export default Home
