export const GET_SONGS = "GET_SONGS"
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES"
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES"
export const ADD_TO_PLAYER = "ADD_TO_PLAYER"
export const ADD_TITLE = "ADD_TITLE"
export const REMOVE_TITLE = "REMOVE_TITLE"


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


export const addToFavouritesAction = (id) => {
    return {
        type: ADD_TO_FAVOURITES,
        payload: id
    }
}

export const removeFromFavouritesAction = (id) => {
    return {
        type: REMOVE_FROM_FAVOURITES,
        payload: id
    }
}


export const addTitle = (title) => {
    return {
        type: ADD_TITLE,
        payload: title
    }
}

export const removeTitle = (title) => {
    return {
        type: REMOVE_TITLE,
        payload: title
    }
}

export const musicPlayerAction = (song) => {
    return {
        type: ADD_TO_PLAYER,
        payload: song
    }
}