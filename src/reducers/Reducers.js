import {
  ADD_BILL,
  ADD_INGREDIENTS,
  ADD_ONE,
  MINUS_ONE,
  REMOVE_BILL,
  REMOVE_INGREDIENTS
} from '../actions'
import {ENABLE_STATUS, REMOVE_STATUS} from "../components/actions";

const initialState = {
  Ingredients: {
    Lettuce: [],
    Cheese: [],
    Meat: [],
    Tomato: []
  },
  number: 0,
  Bill: 0,
  Status: {
    Lettuce: false,
    Tomato: false,
    Meat: false,
    Cheese: false
  }
}
function reducer(state = initialState, action) {

  switch (action.type) {
    case ADD_ONE:
      return {
        number: state.number + 1
      }
    case MINUS_ONE:
      return {
        number: state.number - 1
      }
    case ADD_INGREDIENTS:
      return {
        ...state,
        Ingredients: action.payload.Ingredients
      }
    case REMOVE_INGREDIENTS:
      return {
        ...state,
        Ingredients: action.payload.Ingredients
      }
    case ADD_BILL:
      return {
        ...state,
        Bill: action.payload.Bill
      }
    case REMOVE_BILL:
      return {
        ...state,
        Bill: action.payload.Bill
      }
    case REMOVE_STATUS:
      return {
        ...state,
        Status: action.payload.Status
      }
    case ENABLE_STATUS:
      return {
        ...state,
        Status: action.payload.Status
      }
    default:
      return state
  }
}
export default reducer
