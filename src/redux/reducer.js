import { FETCH_POSTS, SET_SEARCH_QUERY } from '../pages/PostPages';

const initialState = {
  posts: [],
  searchQuery: ''
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.payload };
    case SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};
