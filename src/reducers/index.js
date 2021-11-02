import { combineReducers } from 'redux'

import { reducer as movieReducer } from './movieReducer'
import { reducer as favoritesReducer } from './favoritesReducer'

export default combineReducers({
  movies: movieReducer,
  favorites: favoritesReducer,
})
