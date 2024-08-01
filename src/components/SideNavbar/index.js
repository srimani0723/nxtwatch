import Context from '../Context'
import MenuItems from '../MenuItems'

import {
  MainBox,
  Para,
  ContactUs,
  SocialBox,
  H1,
  Thumb,
} from './styledcomponents'

const SideNavbar = () => (
  <Context.Consumer>
    {value => {
      const {darkTheme} = value
      const Bg = darkTheme ? '#212121' : '#ffffff'

      return (
        <MainBox bg={Bg}>
          <MenuItems />
          <ContactUs>
            <H1 darkTheme={darkTheme}>CONTACT US</H1>

            <SocialBox>
              <Thumb
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <Thumb
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Thumb
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialBox>

            <Para darkTheme={darkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </Para>
          </ContactUs>
        </MainBox>
      )
    }}
  </Context.Consumer>
)

export default SideNavbar
