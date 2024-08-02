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
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};

  flex-grow: 1;
  height: 90vh;
`

export const Para = styled.p``
