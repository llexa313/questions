import { ALL_QUESTIONS_CHANGED } from "../actionCreators/questions";

const initialState = {
  all: []
}

export default function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_QUESTIONS_CHANGED: {
      return {
        // Again, one less level of nesting to copy
        ...state,
        all: action.questions,
      }
    }
    default:
      return state
  }
}
