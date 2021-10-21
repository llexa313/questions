export const TAGS_FILTERS_CHANGED = 'TAGS_FILTERS_CHANGED';
export const ADD_TAG_FILTER = 'ADD_TAG_FILTER';

export function tagsFilterChanged(tags) {
  return {
    type: TAGS_FILTERS_CHANGED,
    tags
  }
}

export function addTagFilter(tag) {
  return {
    type: ADD_TAG_FILTER,
    tag
  }
}
