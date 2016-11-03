import { combineReducers } from 'redux'
import userLoggedReducer from './userLoggedReducer'

const rootReducer = combineReducers({
  userLogged: userLoggedReducer
})

export default rootReducer
