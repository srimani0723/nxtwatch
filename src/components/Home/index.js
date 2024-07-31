import {Component} from 'react'

import Header from '../Header'
import SideNavbar from '../SideNavbar'

import {
  HomeContainer,
  MainContainer,
  Para,
  ContentBox,
} from './styledcomponents'

class Home extends Component {
  state = {}

  render() {
    return (
      <HomeContainer flex="column">
        <Header />
        <MainContainer flex="row">
          <SideNavbar />
          <ContentBox>
            <Para>hi</Para>
          </ContentBox>
        </MainContainer>
      </HomeContainer>
    )
  }
}

export default Home
