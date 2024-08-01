import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  height: 90vh;
`
export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};

  flex-grow: 1;
  height: 90vh;
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

export const SearchBox = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  width: 50%;
  max-width: 500px;
  border: 1px solid ${props => (props.darkTheme ? '#424242' : '#cccccc')};
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
`

export const FailureBtn = styled.button`
  border: 0px;
  padding: 10px 20px;
  color: #f9f9f9;
  font-weight: 500;
  font-size: small;
  font-family: 'Roboto';
  border-radius: 10px;
  background-color: #4f46e5;
  cursor: pointer;
`
