import styled from 'styled-components'

export const Card = styled.li`
  padding: 0px;
  list-style: none;

  @media screen and (max-width: 576px) {
    width: 100%;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 48%;
    margin: 5px;
  }

  @media screen and (min-width: 768px) {
    width: 31%;
    margin: 10px;
    margin-right: 0px;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
`

export const ThumbLogo = styled.img`
  width: 30px;
  border-radius: 50%;
`

export const Para = styled.p`
  font-size: small;
  font-family: 'Roboto';
  padding: 0px;
  margin: 0px;

  @media screen and (min-width: 992px) {
    font-size: medium;
  }

  color: ${props => (props.darkTheme ? ' #ffffff' : ' #0f0f0f')};
`

export const Name = styled.p`
  font-size: small;
  font-weight: 500;
  font-family: 'Roboto';
  padding: 0px;
  margin: 0px;
  margin-top: 5px;

  color: ${props => (props.darkTheme ? ' #606060' : ' #606060')};
`
export const DataBox = styled.div`
  display: flex;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
`
export const VideoContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-top: 0px;
  padding-right: 0px;
`
