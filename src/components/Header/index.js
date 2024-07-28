import {Component} from 'react'

import {FiSun} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {
  HeaderBg,
  IconsBox,
  Logo,
  ProfileImg,
  Button,
  ThemeBtn,
} from './styledcomponents'
import Context from '../Context'

class Header extends Component {
  state = {}

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {darkTheme, toggleTheme} = value
          const profile =
            'https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png'
          const logo = darkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          const changeTheme = () => {
            toggleTheme()
          }
          const Bg = darkTheme ? '#181818' : '#f9f9f9'

          return (
            <HeaderBg bg={Bg}>
              <Logo src={logo} />
              <IconsBox>
                <ThemeBtn
                  onClick={changeTheme}
                  color={darkTheme ? '#ffffff' : null}
                >
                  {darkTheme ? <FiSun /> : <FaMoon />}
                </ThemeBtn>

                <ProfileImg src={profile} />
                <Button type="button" color={darkTheme ? '#ffffff' : '#3b82f6'}>
                  Logout
                </Button>
              </IconsBox>
            </HeaderBg>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Header
