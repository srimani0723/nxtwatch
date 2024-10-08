/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const HeaderBg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
  background-color: ${props => props.bg};
  height: 10vh;
`
export const IconsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.img`
  width: 13%;
  max-width: 120px;
  min-width: 100px;
`

export const ProfileImg = styled.img`
  width: 30px;
  margin-left: 10px;

  @media screen and (min-width: 768px) {
    display: block;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Button = styled.button`
  border: 1px solid ${props => props.color};
  color: ${props => props.color};

  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;

  border-radius: 0px;
  font-size: large;
  font-weight: bold;

  margin-left: 15px;
  border-radius: 3px;
  background-color: transparent;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: block;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const ThemeBtn = styled.button`
  background-color: transparent;
  border: 0px;
  font-size: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${props => props.color};

  cursor: pointer;
`
