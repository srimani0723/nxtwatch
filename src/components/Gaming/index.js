import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {SiYoutubegaming} from 'react-icons/si'

import Context from '../Context'
import Header from '../Header'
import SideNavbar from '../SideNavbar'
import FailureView from '../FailureView'
import GameVideoCard from '../GameVideoCard'

import {
  Container,
  MainContainer,
  ContentBox,
  HeadingBox,
  HeadingLogo,
  Heading,
  FailureBox,
  FailureBtn,
  FailureH1,
  FailureImg,
  FailurePara,
  LoaderBox,
  VideosList,
} from './styledcomponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const newData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))
      this.setState({
        videosList: newData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoader = () => (
    <Context.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <LoaderBox data-testid="loader">
            <Loader
              type="ThreeDots"
              color={darkTheme ? '#ffffff' : '#3b82f6'}
              height="50"
              width="50"
            />
          </LoaderBox>
        )
      }}
    </Context.Consumer>
  )

  renderFailureView = () => <FailureView retry={this.getVideosList} />

  renderNovideosView = () => (
    <Context.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <FailureBox>
            <FailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <FailureH1 darkTheme={darkTheme}>No Search results found</FailureH1>
            <FailurePara darkTheme={darkTheme}>
              Try different key words or remove search filter
            </FailurePara>
            <FailureBtn type="button" onClick={this.getVideosList}>
              Retry
            </FailureBtn>
          </FailureBox>
        )
      }}
    </Context.Consumer>
  )

  renderVideoCards = () => (
    <Context.Consumer>
      {value => {
        const {darkTheme} = value
        const {videosList} = this.state

        if (videosList.length === 0) {
          return this.renderNovideosView()
        }
        return (
          <>
            <HeadingBox darkTheme={darkTheme}>
              <HeadingLogo darkTheme={darkTheme}>
                <SiYoutubegaming size={30} color="#ff0b37" />
              </HeadingLogo>
              <Heading darkTheme={darkTheme}>Gaming</Heading>
            </HeadingBox>

            <VideosList>
              {videosList.map(each => (
                <GameVideoCard key={each.id} details={each} />
              ))}
            </VideosList>
          </>
        )
      }}
    </Context.Consumer>
  )

  renderApiView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoCards()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

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
                <ContentBox data-testid="gaming" darkTheme={darkTheme}>
                  {this.renderApiView()}
                </ContentBox>
              </MainContainer>
            </Container>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Trending
