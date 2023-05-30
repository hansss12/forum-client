import { combineReducers } from 'redux'
import { threadReducer } from './threadReducer'
import { profileReducer } from './profileReducer'

const rootReducer = combineReducers({ threadReducer, profileReducer })
export default rootReducer
