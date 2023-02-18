export const GET_SONGS = "GET_SONGS"
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES"
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES"
export const ADD_TO_PLAYER = "ADD_TO_PLAYER"



export const fetchSongsAction = (query) => {
    return async (dispatch, getState) => {
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query)
            if (response.ok) {
                let songs = await response.json()
                dispatch({
                    type: GET_SONGS,
                    payload: songs.data
                })
            } else {
                console.log("Error")
            }
        } catch (error) {
            console.log(error)
        }
    }
}


export const addToFavouritesAction = (song) => {
    return {
        type: ADD_TO_FAVOURITES,
        payload: song
    }
}

export const removeFromFavouritesAction = (id) => {
    return {
        type: REMOVE_FROM_FAVOURITES,
        payload: id
    }
}


export const musicPlayerAction = (song) => {
    return {
        type: ADD_TO_PLAYER,
        payload: song
    }
}