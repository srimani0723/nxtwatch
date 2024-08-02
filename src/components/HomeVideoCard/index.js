import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import {BsDot} from 'react-icons/bs'

import Context from '../Context'

import './index.css'
import {
  Card,
  Thumbnail,
  Content,
  ThumbLogo,
  VideoContent,
  Name,
  Para,
  DataBox,
} from './styledcomponents'

const HomeVideoCard = props => (
  <Context.Consumer>
    {value => {
      const {darkTheme, changeMenu} = value
      const {details} = props
      const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = details
      const {name, profileImageUrl} = channel
      const date = formatDistanceToNow(new Date(publishedAt))
        .split(' ')
        .slice(1, 3)
        .join(' ')

      return (
        <Card>
          <Link
            to={`/videos/${id}`}
            className="link"
            onClick={() => changeMenu('INITIAL')}
          >
            <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
            <Content>
              <ThumbLogo src={profileImageUrl} alt="channel logo" />
              <VideoContent>
                <Para darkTheme={darkTheme}>{title}</Para>
                <Name darkTheme={darkTheme}>{name}</Name>
                <DataBox>
                  <Name darkTheme={darkTheme}>{viewCount} views</Name>
                  <BsDot size={20} className="dot" />
                  <Name darkTheme={darkTheme}>{date} ago</Name>
                </DataBox>
              </VideoContent>
            </Content>
          </Link>
        </Card>
      )
    }}
  </Context.Consumer>
)

export default HomeVideoCard
