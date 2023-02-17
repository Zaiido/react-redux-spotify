import { ADD_TO_PLAYER } from "../actions";

const initialState = {
    song: []
}

const musicPlayerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_PLAYER:
            {
                return {
                    ...state,
                    song: action.payload
                }
            }

        default:
            return state;
    }
}

export default musicPlayerReducer