import undoable from "redux-undo";
import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actions";

const initialState = {
    songs: []
}

const favouritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                songs: [...state.songs, action.payload]
            }

        case REMOVE_FROM_FAVOURITES:
            return {
                ...state,
                songs: state.songs.filter((id) => id !== action.payload)
            }


        default:
            return state;
    }

}

const undoableFavouritesReducer = undoable(favouritesReducer)

export default undoableFavouritesReducer