import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import {FiSun, FiLogOut} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {IoReorderThree} from 'react-icons/io5'

import './index.css'
import {
  HeaderBg,
  IconsBox,
  Logo,
  ProfileImg,
  ThemeBtn,
  SmScreenButton,
} from './styledcomponents'
import Context from '../Context'

const Header = props => (
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
      const popupThemeBgColor = darkTheme ? '#212121' : '#ffffff'
      const cancelBtn = darkTheme
        ? {color: '#ffffff', border: '1px solid #ffffff'}
        : null
      const logoutBtnPara = darkTheme
        ? {color: '#000000', border: '1px solid #000000'}
        : {color: '#3b82f6', border: '1px solid #3b82f6'}

      const onLogOut = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      return (
        <>
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

              <SmScreenButton
                type="button"
                color={darkTheme ? '#ffffff' : null}
                pt="10px"
              >
                <IoReorderThree />
              </SmScreenButton>

              <Popup
                modal
                trigger={
                  <button
                    type="button"
                    className="trigger-button logout-btn"
                    aria-label="close"
                  >
                    <p className="logout-btn-para" style={logoutBtnPara}>
                      Logout
                    </p>
                    <FiLogOut
                      className="logout-btn-logo"
                      style={{color: darkTheme ? '#ffffff' : '#000000'}}
                    />
                  </button>
                }
              >
                {close => (
                  <div
                    className="popup-content"
                    style={{backgroundColor: `${popupThemeBgColor}`}}
                  >
                    <p
                      className="popup-para"
                      style={{color: darkTheme ? '#ffffff' : '#00306e'}}
                    >
                      Are you sure you want to logout?
                    </p>
                    <div className="popup-btn-box">
                      <button
                        type="button"
                        className="trigger-button popup-cancel"
                        onClick={() => close()}
                        style={cancelBtn}
                      >
                        Cancel
                      </button>

                      <button
                        type="button"
                        className="popup-confirm"
                        onClick={onLogOut}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                )}
              </Popup>
            </IconsBox>
          </HeaderBg>
        </>
      )
    }}
  </Context.Consumer>
)

export default withRouter(Header)
