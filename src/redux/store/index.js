import { combineReducers, configureStore } from "@reduxjs/toolkit";
import undoableFavouritesReducer from "../../reducers/favouritesReducer";
// import favouritesReducer from "../../reducers/favouritesReducer";
import undoableTitlesReducer from "../../reducers/favouriteTitlesReducer";
// import favouriteTitlesReducer from "../../reducers/favouriteTitlesReducer";
import fetchSongsReducer from "../../reducers/fetchSongsReducer";
import musicPlayerReducer from "../../reducers/musicPlayerReducer";

const combinedReducer = combineReducers({
    songs: fetchSongsReducer,
    favourites: undoableFavouritesReducer,
    favouriteTitles: undoableTitlesReducer,
    musicPlayer: musicPlayerReducer
})

const store = configureStore({
    reducer: combinedReducer
})

export default store