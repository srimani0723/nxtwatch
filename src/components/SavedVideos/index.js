import {Component} from 'react'

import {HiFire} from 'react-icons/hi'

import Context from '../Context'
import Header from '../Header'
import SideNavbar from '../SideNavbar'
import TrendingVideoCard from '../TrendingVideoCard'

import {
  Container,
  MainContainer,
  ContentBox,
  FailureBox,
  FailureH1,
  FailureImg,
  FailurePara,
  Heading,
  HeadingBox,
  HeadingLogo,
  VideosList,
} from './styledcomponents'

class SavedVideos extends Component {
  state = {}

  renderNovideosView = () => (
    <Context.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <FailureBox>
            <FailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <FailureH1 darkTheme={darkTheme}>No Search results found</FailureH1>
            <FailurePara darkTheme={darkTheme}>
              Try different key words or remove search filter
            </FailurePara>
          </FailureBox>
        )
      }}
    </Context.Consumer>
  )

  renderVideoCards = () => (
    <Context.Consumer>
      {value => {
        const {darkTheme, savedVideosList} = value

        if (savedVideosList.length === 0) {
          return this.renderNovideosView()
        }

        return (
          <>
            <HeadingBox darkTheme={darkTheme}>
              <HeadingLogo darkTheme={darkTheme}>
                <HiFire size={30} color="#ff0b37" />
              </HeadingLogo>
              <Heading darkTheme={darkTheme}>SavedVideos</Heading>
            </HeadingBox>

            <VideosList>
              {savedVideosList.map(each => (
                <TrendingVideoCard key={each.id} details={each} />
              ))}
            </VideosList>
          </>
        )
      }}
    </Context.Consumer>
  )

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
                <ContentBox darkTheme={darkTheme}>
                  {this.renderVideoCards()}
                </ContentBox>
              </MainContainer>
            </Container>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default SavedVideos
