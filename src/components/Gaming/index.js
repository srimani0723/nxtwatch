import {Component} from 'react'

import Context from '../Context'
import Header from '../Header'
import SideNavbar from '../SideNavbar'

import {Container, MainContainer, Para, ContentBox} from './styledcomponents'

class Gaming extends Component {
  state = {}

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <Container flex="column">
              <Header />
              <MainContainer flex="row">
                <SideNavbar />
                <ContentBox>
                  <Para>hi</Para>
                </ContentBox>
              </MainContainer>
            </Container>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Gaming
