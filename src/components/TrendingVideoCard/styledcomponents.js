import styled from 'styled-components'

export const Card = styled.li`
  padding: 0px;
  list-style: none;

  width: 100%;

  @media screen and (max-width: 576px) {
    margin-bottom: 20px;
  }
`
export const Layout = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 10px;

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`

export const Thumbnail = styled.img`
  width: 50%;

  @media screen and (max-width: 576px) {
    width: 100%;
    margin-bottom: 20px;
  }
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

  color: #64748b;
`
export const DataBox = styled.div`
  display: flex;
  align-items: center;
`
export const VideoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
  margin-left: 10px;
`

export const ThumbLogo = styled.img`
  width: 10%;
  border-radius: 50%;
  display: none;
  @media screen and (max-width: 576px) {
    display: block;
  }
`
export const Content = styled.div`
  display: flex;
  align-items: flex-start;
`
export const Info = styled.div`
  @media screen and (max-width: 576px) {
    display: flex;
  }
`
