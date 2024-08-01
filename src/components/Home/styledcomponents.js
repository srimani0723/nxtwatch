import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`
export const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  height: 90vh;
  width: 100%;
`
export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};

  flex-grow: 1;
  height: 90vh;

  overflow: auto;
`

export const Para = styled.p``

export const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding: 20px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 20px;
`
export const GetItNowBtn = styled.button`
  background-color: transparent;
  border: 1px solid #0f0f0f;
  padding: 8px 10px;
  font-size: small;
  font-family: 'Roboto';
  font-weight: 500;
  margin-top: 5px;
  cursor: pointer;
`
export const Logo = styled.img`
  width: 20%;
`

export const RemoveBanner = styled.button`
  border: 0px;
  font-weight: bold;
  background-color: transparent;
  cursor: pointer;
`

export const SearchBox = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  margin-bottom: 0px;
  width: 50%;
  max-width: 500px;
  border: 1px solid ${props => (props.darkTheme ? '#424242' : '#cccccc')};
  @media screen and (max-width: 576px) {
    width: 90%;
  }
`
export const SearchBar = styled.input`
  cursor: pointer;
  outline: none;
  border: 0px;
  padding: 5px;
  width: 100%;
  background-color: ${props => (props.darkTheme ? '#181818' : '#ffffff')};
`
export const SearchBtn = styled.button`
  border: 0px;
  border-left: 1px solid #909090;
  cursor: pointer;
  padding: 5px;
  width: 60px;
  color: ${props => (props.darkTheme ? '#909090' : '#0f0f0f')};
  background-color: ${props => (props.darkTheme ? '#383838' : null)};
`

export const FailureBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export const FailureImg = styled.img`
  width: 90%;
  max-width: 350px;
`

export const FailureH1 = styled.h1`
  font-size: large;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#0f0f0f')};
`

export const FailurePara = styled.p`
  font-size: small;
  font-weight: 500;
  font-family: 'Roboto';
  color: #64748b;
  max-width: 350px;
  text-align: center;
  margin-top: 0px;
`

export const FailureBtn = styled.button`
  border: 0px;
  padding: 10px 25px;
  width: 100px;
  color: #f9f9f9;
  font-weight: 500;
  font-size: small;
  font-family: 'Roboto';
  border-radius: 5px;
  background-color: #4f46e5;
  cursor: pointer;
`

export const LoaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`

export const VideosList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 15px;
  padding-top: 0px;
`
