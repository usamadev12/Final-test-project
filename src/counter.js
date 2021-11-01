import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const CounterStyle = styled.div`
  display: flex;

  & button {
    fontsize: 1.5rem;
    width: 40px;
    height: 40px;
  }
`

const Counter = () => {
  const usedDispatch = useDispatch()
  const count = useSelector(state => state.number)

  const addOne = () => {
    usedDispatch({ type: 'ADD_ONE', payload: { number: count } })
  }

  const minusOne = () => {
    usedDispatch({ type: 'MINUS_ONE', payload: { number: count } })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>{count}</h1>
        <CounterStyle>
          <button onClick={minusOne} type='button'>
            -
          </button>
          <button onClick={addOne} type='button'>
            +
          </button>
        </CounterStyle>
      </header>
    </div>
  )
}

export default Counter
