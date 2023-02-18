import { Heart, HeartFill } from "react-bootstrap-icons"
import { useDispatch } from "react-redux"
import { addToFavouritesAction, musicPlayerAction, removeFromFavouritesAction } from "../actions"

const SingleSong = ({ song, favourite }) => {

    const dispatch = useDispatch()

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
            <div className="card">
                <img src={song.album.cover_medium}
                    className="card-img-top" alt="..." />
                <div className="card-body">
                    <button className="btn play-button ml-auto mr-3" onClick={() => {
                        dispatch(musicPlayerAction(song))
                    }}>
                        <svg role="img" height="24" width="24" aria-hidden="true"
                            viewBox="0 0 24 24" data-encore-id="icon"
                            className="Svg-sc-ytk21e-0 uPxdw">
                            <path
                                d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z">
                            </path>
                        </svg>
                    </button>
                    {favourite ?
                        <HeartFill className="favourite-icon green" onClick={(e) => {
                            dispatch(removeFromFavouritesAction(song.id))
                        }} />
                        :
                        <Heart className="favourite-icon" onClick={(e) => {
                            dispatch(addToFavouritesAction(song))
                        }


                        } />}
                    <h5 className="card-title truncate">{song.title}</h5>
                    <p className="card-text">{song.artist.name}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleSong