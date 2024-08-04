import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import Context from '../Context'
import Header from '../Header'
import SideNavbar from '../SideNavbar'
import PlayerCard from '../PlayerCard'
import FailureView from '../FailureView'

import './index.css'
import {
  Container,
  MainContainer,
  ContentBox,
  LoaderBox,
  FailureBox,
  FailureBtn,
  FailureH1,
  FailureImg,
  FailurePara,
} from './styledcomponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoData: null,
    like: false,
    dislike: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  formattedData = each => ({
    channel: {
      name: each.channel.name,
      profileImageUrl: each.channel.profile_image_url,
      subscriberCount: each.channel.subscriber_count,
    },
    description: each.description,
    id: each.id,
    publishedAt: each.published_at,
    thumbnailUrl: each.thumbnail_url,
    title: each.title,
    videoUrl: each.video_url,
    viewCount: each.view_count,
  })

  getVideoDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const each = data.video_details
      const newData = this.formattedData(each)

      this.setState({
        videoData: newData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderFailureView = () => <FailureView retry={this.getVideoDetails} />

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

  onLike = () => {
    this.setState(prevState => ({
      like: !prevState.like,
      dislike: false,
    }))
  }

  onDisLike = () => {
    this.setState(prevState => ({
      dislike: !prevState.dislike,
      like: false,
    }))
  }

  renderVideoDetails = () => {
    const {like, dislike, videoData} = this.state

    return (
      <PlayerCard
        likeIt={this.onLike}
        dislikeIt={this.onDisLike}
        isLiked={like}
        isDisliked={dislike}
        videoData={videoData}
      />
    )
  }

  renderApiView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoDetails()
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
                <ContentBox
                  data-testid="videoItemDetails"
                  darkTheme={darkTheme}
                >
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

export default VideoItemDetails
