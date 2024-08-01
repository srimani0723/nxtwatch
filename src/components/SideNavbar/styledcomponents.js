import styled from 'styled-components'

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  background-color: ${props => props.bg};

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 30%;
    min-width: 200px;
    display: flex;
  }

  @media screen and (min-width: 992px) {
    min-width: 250px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const ContactUs = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';

  width: 80%;
  margin-left: 20px;
  margin-bottom: 20px;
`

export const H1 = styled.h1`
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#0f0f0f')};
  font-weight: 500;
  font-size: medium;
`

export const SocialBox = styled.ul`
  display: flex;
  align-items: center;

  padding: 0px;
`

export const Para = styled.p`
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#0f0f0f')};
  font-size: medium;
`

export const Thumb = styled.img`
  width: 30px;
  margin-right: 10px;
`
