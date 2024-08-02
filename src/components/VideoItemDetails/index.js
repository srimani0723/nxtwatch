import {Component} from 'react'

import Context from '../Context'
import Header from '../Header'
import SideNavbar from '../SideNavbar'

import {Container, MainContainer, Para, ContentBox} from './styledcomponents'

class VideoItemDetails extends Component {
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
                <ContentBox
                  data-testid="videoItemDetails"
                  darkTheme={darkTheme}
                >
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

export default VideoItemDetails
