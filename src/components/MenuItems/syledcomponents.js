import styled from 'styled-components'

export const MenuList = styled.ul`
  padding: 0px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const Menu = styled.li`
  list-style: none;
  text-decoration: none;
  outline: none;
  cursor: pointer;

  display: flex;
  align-items: center;

  font-family: 'Roboto';
  font-weight: normal;

  padding: 0px;
  margin-right: 20px;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding-left: 30%;
  }

  background-color: ${props => {
    const {darkTheme, isActive} = props
    const color = darkTheme ? '#424242' : '#e2e8f0'
    return isActive ? color : ''
  }};
`

export const Para = styled.p`
  color: ${props => {
    const {isActive, darkTheme} = props
    const color = darkTheme ? '#f9f9f9' : '#0f0f0f'
    return isActive ? color : '#7e858e'
  }};
  font-weight: ${props => (props.isActive ? '500' : '500')};
`
