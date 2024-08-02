import styled from 'styled-components'

export const FailureBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
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
