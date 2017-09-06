import * as types from '../constants/ActionTypes';

const initialState = {
  followings: {},
  id: null,
  likes: {},
  oauthToken: null,
};

const session = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SESSION_FOLLOWINGS_SUCCESS:
      return {
        ...state,
        followings: action.followings,
      };

    case types.FETCH_SESSION_LIKES_SUCCESS:
      return {
        ...state,
        likes: action.likes,
      };

    case types.FETCH_SESSION_USER_SUCCESS:
      return {
        ...state,
        id: action.id,
      };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        oauthToken: action.oauthToken,
      };

    case types.LOGOUT:
      return { ...initialState };

    default:
      return state;
  }
};

export default session;
