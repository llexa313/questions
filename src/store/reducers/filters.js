import { TAGS_FILTERS_CHANGED, ADD_TAG_FILTER } from "../actionCreators/filters";

const initialState = {
  tags: [],
}

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case TAGS_FILTERS_CHANGED: {
      return {
        ...state,
        tags: action.tags,
      }
    }
    case ADD_TAG_FILTER: {
      return {
        ...state,
        tags: state.tags.concat(action.tag),
      }
    }
    default:
      return state
  }
}
