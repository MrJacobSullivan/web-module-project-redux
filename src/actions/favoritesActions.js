const ACTIONS = {
  ADD_FAVORITE: 'ADD_FAVORITE',
  DELETE_FAVORITE: 'DELETE_FAVORITE',
}

const deleteFavorite = (id) => {
  return { type: ACTIONS.DELETE_MOVIE, payload: id }
}

const addFavorite = (newFavorite) => ({ type: ACTIONS.ADD_MOVIE, payload: { ...newFavorite } })

export { ACTIONS, addFavorite, deleteFavorite }
