import { combineReducers } from 'redux'

import filtersReducer from './filters'
import questionsReducer from "./questions";

const rootReducer = combineReducers({
  filters: filtersReducer,
  questions: questionsReducer
})

export default rootReducer
