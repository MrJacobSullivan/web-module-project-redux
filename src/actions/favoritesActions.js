const ACTIONS = {
  ADD_FAVORITE: 'ADD_FAVORITE',
  DELETE_FAVORITE: 'DELETE_FAVORITE',
  TOGGLE_SHOW_FAVORITES: 'TOGGLE_SHOW_FAVORITES',
}

const deleteFavorite = (id) => {
  return { type: ACTIONS.DELETE_FAVORITE, payload: id }
}

const addFavorite = (newFavorite) => ({ type: ACTIONS.ADD_FAVORITE, payload: { ...newFavorite } })

const toggleShowFavorites = () => ({ type: ACTIONS.TOGGLE_SHOW_FAVORITES })

export { ACTIONS, addFavorite, deleteFavorite, toggleShowFavorites }
