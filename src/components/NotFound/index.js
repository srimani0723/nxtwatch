import {Component} from 'react'

import Context from '../Context'
import Header from '../Header'
import SideNavbar from '../SideNavbar'

import {
  Container,
  MainContainer,
  Para,
  ContentBox,
  H1,
  Image,
} from './styledcomponents'

class NotFound extends Component {
  state = {}

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {darkTheme} = value
          const image = darkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
          return (
            <Container flex="column">
              <Header />
              <MainContainer flex="row">
                <SideNavbar />
                <ContentBox
                  data-testid="videoItemDetails"
                  darkTheme={darkTheme}
                >
                  <Image src={image} alt="not found" />
                  <H1 darkTheme={darkTheme}>Page Not Found</H1>
                  <Para>
                    we are sorry, the page you requested could not be found.
                  </Para>
                </ContentBox>
              </MainContainer>
            </Container>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default NotFound
