import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {IoClose} from 'react-icons/io5'
import {IoMdSearch} from 'react-icons/io'

import Context from '../Context'
import Header from '../Header'
import SideNavbar from '../SideNavbar'
import HomeVideoCard from '../HomeVideoCard'
import FailureView from '../FailureView'

import {
  Container,
  MainContainer,
  Para,
  ContentBox,
  Banner,
  BannerContent,
  GetItNowBtn,
  SearchBox,
  SearchBar,
  SearchBtn,
  FailureImg,
  FailureBox,
  FailureH1,
  FailurePara,
  FailureBtn,
  LoaderBox,
  RemoveBanner,
  VideosList,
} from './styledcomponents'
import {Logo} from '../Header/styledcomponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    searchInput: '',
    bannerDisplay: true,
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getVideosList()
  }

  formattedData = each => ({
    channel: {
      name: each.channel.name,
      profileImageUrl: each.channel.profile_image_url,
    },
    id: each.id,
    publishedAt: each.published_at,
    thumbnailUrl: each.thumbnail_url,
    title: each.title,
    viewCount: each.view_count,
  })

  getVideosList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const newData = data.videos.map(each => this.formattedData(each))

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

  onRemoveBanner = () => {
    this.setState(prevState => ({
      bannerDisplay: !prevState.bannerDisplay,
    }))
  }

  onChangeInput = event => {
    this.setState(
      {
        searchInput: event.target.value,
      },
      console.log(event.target.value),
    )
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

  renderVideoCards = () => {
    const {videosList} = this.state

    if (videosList.length === 0) {
      return this.renderNovideosView()
    }

    return (
      <VideosList>
        {videosList.map(each => (
          <HomeVideoCard key={each.id} details={each} />
        ))}
      </VideosList>
    )
  }

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

  searchForVideo = event => {
    event.preventDefault()
    this.getVideosList()
  }

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {darkTheme} = value
          const {bannerDisplay, searchInput} = this.state
          const logo =
            'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <Container>
              <Header />
              <MainContainer>
                <SideNavbar />
                <ContentBox darkTheme={darkTheme} data-testid="home">
                  {bannerDisplay ? (
                    <Banner data-testid="banner">
                      <BannerContent>
                        <Logo src={logo} alt="nxt watch logo" />
                        <Para>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </Para>
                        <GetItNowBtn type="button">GET IT NOW</GetItNowBtn>
                      </BannerContent>

                      <RemoveBanner
                        type="button"
                        data-testid="close"
                        onClick={this.onRemoveBanner}
                      >
                        <IoClose size={25} />
                      </RemoveBanner>
                    </Banner>
                  ) : null}

                  <SearchBox
                    darkTheme={darkTheme}
                    onSubmit={this.searchForVideo}
                    value={searchInput}
                  >
                    <SearchBar
                      darkTheme={darkTheme}
                      type="search"
                      onChange={this.onChangeInput}
                      placeholder="Search"
                      value={searchInput}
                    />
                    <SearchBtn
                      type="button"
                      darkTheme={darkTheme}
                      data-testid="searchButton"
                      onClick={this.getVideosList}
                    >
                      <IoMdSearch />
                    </SearchBtn>
                  </SearchBox>

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

export default Home
