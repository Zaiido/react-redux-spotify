import { combineReducers, configureStore } from "@reduxjs/toolkit";
import undoableFavouritesReducer from "../../reducers/favouritesReducer";
import fetchSongsReducer from "../../reducers/fetchSongsReducer";
import musicPlayerReducer from "../../reducers/musicPlayerReducer";

const combinedReducer = combineReducers({
    songs: fetchSongsReducer,
    favourites: undoableFavouritesReducer,
    musicPlayer: musicPlayerReducer
})

const store = configureStore({
    reducer: combinedReducer
})

export default store