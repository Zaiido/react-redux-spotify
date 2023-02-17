import { ADD_TITLE, REMOVE_TITLE } from "../actions";

const initialState = {
    titles: []
}

const favouriteTitlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TITLE:
            return {
                ...state,
                titles: [...state.titles, action.payload]
            }
        case REMOVE_TITLE:
            return {
                ...state,
                titles: state.titles.filter((title) => title !== action.payload)
            }


        default:
            return state
    }
}
export default favouriteTitlesReducer