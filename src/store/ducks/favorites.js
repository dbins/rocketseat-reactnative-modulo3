// Action Type
export const Types = {
  // NAMESPACE - Nome do tipo de action
  ADD_REQUEST: 'favorites/ADD_REQUEST',
  ADD_SUCCESS: 'favorites/ADD_SUCCESS',
  ADD_FAILURE: 'favorites/ADD_FAILURE',
};

const initialState = {
  data: [],
  loading: false,
  errorOnAdd: null,
};

export default function favorites(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_REQUEST: // Roda junto com o Middleware
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      // return [...state, action.payload.repository];
      return { data: [...state.data, action.payload.repository], errorOnAdd: null, loading: false };
    case Types.ADD_FAILURE:
      return { ...state, errorOnAdd: action.payload.message, loading: false };
    default:
      return state;
  }
}
// Action Creator
export const Creators = {
  addFavoriteRequest: repoName => ({
    type: Types.ADD_REQUEST,
    payload: {
      repoName,
    },
  }),

  addFavoriteSuccess: repository => ({
    type: Types.ADD_SUCCESS,
    payload: {
      repository,
    },
  }),

  addFavoriteError: message => ({
    type: Types.ADD_FAILURE,
    payload: {
      message,
    },
  }),
};
