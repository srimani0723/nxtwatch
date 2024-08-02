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
            <FailureH1 darkTheme={darkTheme}>No saved videos found</FailureH1>
            <FailurePara darkTheme={darkTheme}>
              Save your videos by clicking a button
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
              <Heading darkTheme={darkTheme}>Saved Videos</Heading>
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
                <ContentBox data-testid="savedVideos" darkTheme={darkTheme}>
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
