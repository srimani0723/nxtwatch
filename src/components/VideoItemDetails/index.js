import {Component} from 'react'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BsDot} from 'react-icons/bs'
import {MdPlaylistAdd} from 'react-icons/md'

import Context from '../Context'
import Header from '../Header'
import SideNavbar from '../SideNavbar'

import './index.css'
import {
  Container,
  MainContainer,
  ContentBox,
  VideoTitle,
  LoaderBox,
  FailureBox,
  FailureBtn,
  FailureH1,
  FailureImg,
  FailurePara,
  PlayerBox,
  ActionBox,
  Name,
  VideoAction,
  ActionButton,
  ChannelBox,
  ChannelLogo,
  ChannelContent,
  ChannelName,
  ChannelDes,
  ChannelDesSm,
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
    save: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

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
      const newData = {
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
      }

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
      like: false,
      dislike: !prevState.dislike,
    }))
  }

  onSaveVideo = () => {
    this.setState(prevState => ({
      save: !prevState.save,
    }))
  }

  renderVideoDetails = () => (
    <Context.Consumer>
      {value => {
        const {darkTheme, saveVideo} = value
        const {videoData, like, save, dislike} = this.state
        const {
          channel,
          description,
          publishedAt,
          title,
          videoUrl,
          viewCount,
        } = videoData

        const {name, profileImageUrl, subscriberCount} = channel

        const date = formatDistanceToNow(new Date(publishedAt))
          .split(' ')
          .slice(1, 3)
          .join(' ')

        return (
          <PlayerBox>
            <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
            <VideoTitle darkTheme={darkTheme}>{title}</VideoTitle>
            <ActionBox>
              <VideoAction>
                <Name darkTheme={darkTheme}>{viewCount} views</Name>
                <BsDot size={20} className="dot" />
                <Name darkTheme={darkTheme}>{date} ago</Name>
              </VideoAction>

              <VideoAction>
                <ActionButton
                  type="button"
                  darkTheme={darkTheme}
                  onClick={this.onLike}
                  style={{color: like ? '#ff0000' : null}}
                >
                  <AiOutlineLike className="action-icon" />
                  Like
                </ActionButton>

                <ActionButton
                  type="button"
                  darkTheme={darkTheme}
                  onClick={this.onDisLike}
                  style={{color: dislike ? '#ff0000' : null}}
                >
                  <AiOutlineDislike className="action-icon" />
                  Dislike
                </ActionButton>

                <ActionButton
                  type="button"
                  darkTheme={darkTheme}
                  style={{color: save ? '#ff0000' : null}}
                  onClick={() => {
                    saveVideo({...videoData, isSaved: true})
                    this.onSaveVideo()
                  }}
                >
                  <MdPlaylistAdd className="action-icon" />
                  Save
                </ActionButton>
              </VideoAction>
            </ActionBox>

            <ChannelBox>
              <ChannelLogo src={profileImageUrl} />
              <ChannelContent>
                <ChannelName darkTheme={darkTheme}>{name}</ChannelName>
                <Name darkTheme={darkTheme}>{subscriberCount}</Name>
                <ChannelDes darkTheme={darkTheme}>{description}</ChannelDes>
              </ChannelContent>
            </ChannelBox>

            <ChannelDesSm darkTheme={darkTheme}>{description}</ChannelDesSm>
          </PlayerBox>
        )
      }}
    </Context.Consumer>
  )

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
