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
        favorites: state.favorites.find((favorite) => favorite.id === action.payload.id)
          ? state.favorites
          : [...state.favorites, { ...action.payload }],
      }

    case ACTIONS.DELETE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => action.payload !== item.id),
      }

    case ACTIONS.TOGGLE_SHOW_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      }

    default:
      return state
  }
}

export { reducer }
