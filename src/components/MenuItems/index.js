import {Component} from 'react'
import {Link} from 'react-router-dom'

import {SiYoutubegaming} from 'react-icons/si'
import {AiFillHome} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import {HiFire} from 'react-icons/hi'

import Context from '../Context'
import './index.css'
import {MenuList, Menu, Para} from './syledcomponents'

const menuConstaints = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

class MenuItems extends Component {
  state = {}

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {darkTheme, activeMenu, changeMenu} = value
          const linkColor = darkTheme ? '#f4f4f4' : '#383838'
          return (
            <MenuList>
              <Link to="/" className="link" key={menuConstaints.home}>
                <Menu>
                  <AiFillHome className="icon" />
                  <Para>Home</Para>
                </Menu>
              </Link>

              <Link
                to="/trending"
                className="link"
                key={menuConstaints.trending}
              >
                <Menu>
                  <HiFire className="icon" />
                  <Para>Trending</Para>
                </Menu>
              </Link>

              <Link to="/gaming" className="link" key={menuConstaints.gaming}>
                <Menu>
                  <SiYoutubegaming className="icon" />
                  <Para>Gaming</Para>
                </Menu>
              </Link>

              <Link
                to="/saved-videos"
                className="link"
                key={menuConstaints.savedVideos}
              >
                <Menu>
                  <MdPlaylistAdd className="icon" />
                  <Para>Saved videos</Para>
                </Menu>
              </Link>
            </MenuList>
          )
        }}
      </Context.Consumer>
    )
  }
}
export default MenuItems
