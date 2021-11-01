import styled from 'styled-components'

const HeaderStyles = styled.div`
  background-color: #703b09;
  height: 56px;
  width: 100%;
  overflow: auto;
  padding: 0 20px;
  align-items: center;
  display: flex;

  & div {
    background-color: #fff;
    padding: 8px;
    height: 100%;
    box-sizing: border-box;
    border-radius: 5px;
  }
  & img {
    display: block;
    height: 80%;
  }
`

export default HeaderStyles
