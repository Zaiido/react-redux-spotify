import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../../reducers/favouritesReducer";
import favouriteTitlesReducer from "../../reducers/favouriteTitlesReducer";
import fetchSongsReducer from "../../reducers/fetchSongsReducer";
import musicPlayerReducer from "../../reducers/musicPlayerReducer";

const combinedReducer = combineReducers({
    songs: fetchSongsReducer,
    favourites: favouritesReducer,
    favouriteTitles: favouriteTitlesReducer,
    musicPlayer: musicPlayerReducer
})

const store = configureStore({
    reducer: combinedReducer
})

export default store