import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {IoClose} from 'react-icons/io5'
import {IoMdSearch} from 'react-icons/io'
import Context from '../Context'
import Header from '../Header'
import SideNavbar from '../SideNavbar'

import './index.css'
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

  getVideosList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/videos/all?search='
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)

      this.setState({
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
    this.setState({
      searchInput: event.target.value,
    })
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <Context.Consumer>
      {value => {
        const {darkTheme} = value
        const failureImg = darkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

        return (
          <FailureBox>
            <FailureImg src={failureImg} />
            <FailureH1 darkTheme={darkTheme}>
              Oops! Something Went Wrong
            </FailureH1>
            <FailurePara darkTheme={darkTheme}>
              We are having some trouble to complete your request. Please try
              again.
            </FailurePara>
            <FailureBtn type="button" onClick={this.getVideosList}>
              Retry
            </FailureBtn>
          </FailureBox>
        )
      }}
    </Context.Consumer>
  )

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {darkTheme} = value
          const {bannerDisplay} = this.state
          const logo =
            'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <Container flex="column">
              <Header />
              <MainContainer flex="row">
                <SideNavbar />
                <ContentBox darkTheme={darkTheme}>
                  {bannerDisplay && (
                    <Banner display={bannerDisplay}>
                      <BannerContent>
                        <Logo src={logo} />
                        <Para>Buy Nxt Watch Premium plans with UPI</Para>
                        <GetItNowBtn type="button">GET IT NOW</GetItNowBtn>
                      </BannerContent>

                      <button
                        type="button"
                        aria-label="close"
                        onClick={this.onRemoveBanner}
                        className="remove-btn"
                      >
                        <IoClose size={25} />
                      </button>
                    </Banner>
                  )}

                  <SearchBox darkTheme={darkTheme}>
                    <SearchBar
                      darkTheme={darkTheme}
                      type="text"
                      placeholder="Search"
                    />
                    <SearchBtn
                      type="button"
                      darkTheme={darkTheme}
                      onChange={this.onChangeInput}
                    >
                      <IoMdSearch />
                    </SearchBtn>
                  </SearchBox>

                  {this.renderFailureView()}
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
