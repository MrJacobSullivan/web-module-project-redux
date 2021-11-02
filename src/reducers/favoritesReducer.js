import { ACTIONS } from '../actions/favoritesActions.js'

const initialState = {
  favorites: [],
  displayFavorites: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, { ...action.payload }],
      }

    case ACTIONS.DELETE_FAVORITE:
      return {
        movies: state.favorites.filter((item) => action.payload !== item.id),
      }

    default:
      return state
  }
}

export { reducer }
