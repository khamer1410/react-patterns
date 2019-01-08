// Actions & reducers hold in one file for readability
const INCREASE_COUNT = 'INCREASE_COUNT'
const DECREASE_COUNT = 'DECREASE_COUNT'
const SET_COUNT = 'SET_COUNT'

export const increaseCount = { type: INCREASE_COUNT }
export const decreaseCount = { type: DECREASE_COUNT }
export const setCount = count => ({ type: SET_COUNT, payload: count })

const initialState = 0

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
      return state + 1

    case DECREASE_COUNT:
      return state - 1

    case SET_COUNT:
      return action.payload

    default:
      return state
  }
}
