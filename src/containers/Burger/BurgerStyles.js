import styled from 'styled-components'

const BurgerStyles = styled.div`
  width: 700px;
  height: 600px;
  margin: auto;
  overflow-y: auto;
`
const AddIngredientStyles = styled.div`
  width: 100%;
  background-color: #cf8f2e;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-flow: column;
  flex-flow: column;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-shadow: 0 2px 1px #ccc;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding: 10px 0;
`
export { BurgerStyles, AddIngredientStyles }
