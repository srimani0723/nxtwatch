import Context from '../Context'
import MenuItems from '../MenuItems'

import {MainBox, Para} from './styledcomponents'

const SideNavbar = () => (
  <Context.Consumer>
    {value => {
      const {darkTheme} = value
      const Bg = darkTheme ? '#181818' : '#f9f9f9'

      return (
        <MainBox bg={Bg}>
          <MenuItems />
        </MainBox>
      )
    }}
  </Context.Consumer>
)

export default SideNavbar
