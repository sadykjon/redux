import { ADD_COMMENTS, DELETE_COMMENTS, SHOW_ERROR, SHOW_LOADING, HIDE_LOADING, CLEAR_ERROR, GET_POST_COMMENT } from "../Type";

const initialState = {
  comments: [],
  loading: false,
  error: null
};

export const CommentsReducer = (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case ADD_COMMENTS: {
      const { title, id } = action.payload;
      return {
        ...state,
        comments: [...state.comments, { title, id }]
      };
    }
    case DELETE_COMMENTS: {
      const { id } = action.payload;
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== id)
      };
    }
    case GET_POST_COMMENT: {
      const { data } = action.payload;
      return {
        ...state,
        comments: data
      };
    }
    case SHOW_LOADING: {
      return {
        ...state,
        loading: true

      }
    }
    case HIDE_LOADING: {
      return {
        ...state,
        loading: false
      }
    }
    case SHOW_ERROR: {
      const { error } = action
      return {
        ...state,
        error
      }

    }
    case CLEAR_ERROR: {
      return {
        ...state,
        error: null
      }
    }
    default:
      return state;
  }
};
