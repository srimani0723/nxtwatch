import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BsDot} from 'react-icons/bs'
import {MdPlaylistAdd} from 'react-icons/md'
import {formatDistanceToNow} from 'date-fns'
import Context from '../Context'
import {
  VideoTitle,
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

const PlayerCard = props => {
  const {isLiked, isDisliked, videoData, likeIt, dislikeIt} = props

  return (
    <Context.Consumer>
      {value => {
        const {darkTheme, saveVideo, savedVideosList} = value

        const {
          channel,
          description,
          publishedAt,
          title,
          videoUrl,
          viewCount,
        } = videoData

        const {name, profileImageUrl, subscriberCount} = channel

        let isSaved
        const index = savedVideosList.findIndex(
          each => each.id === videoData.id,
        )
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const onLike = () => {
          likeIt()
        }

        const onDislike = () => {
          dislikeIt()
        }

        const onSavevideo = () => {
          saveVideo(videoData)
        }

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
                  onClick={onLike}
                  style={{color: isLiked ? '#2563eb' : '#64748b'}}
                >
                  <AiOutlineLike className="action-icon" />
                  Like
                </ActionButton>

                <ActionButton
                  type="button"
                  darkTheme={darkTheme}
                  onClick={onDislike}
                  style={{color: isDisliked ? '#2563eb' : '#64748b'}}
                >
                  <AiOutlineDislike className="action-icon" />
                  Dislike
                </ActionButton>

                <ActionButton
                  type="button"
                  darkTheme={darkTheme}
                  style={{color: isSaved ? '#2563eb' : '#64748b'}}
                  onClick={onSavevideo}
                >
                  <MdPlaylistAdd className="action-icon" />
                  {isSaved ? 'Saved' : 'Save'}
                </ActionButton>
              </VideoAction>
            </ActionBox>

            <ChannelBox>
              <ChannelLogo src={profileImageUrl} alt="channel logo" />
              <ChannelContent>
                <ChannelName darkTheme={darkTheme}>{name}</ChannelName>
                <Name darkTheme={darkTheme}>{subscriberCount} subscribers</Name>
                <ChannelDes darkTheme={darkTheme}>{description}</ChannelDes>
              </ChannelContent>
            </ChannelBox>

            <ChannelDesSm darkTheme={darkTheme}>{description}</ChannelDesSm>
          </PlayerBox>
        )
      }}
    </Context.Consumer>
  )
}
export default PlayerCard
