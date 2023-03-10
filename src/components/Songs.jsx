import { useEffect } from "react"
import { Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { fetchSongsAction } from "../actions"
import SingleSong from "./SingleSong"

const Songs = () => {
    const dispatch = useDispatch()
    const allSongs = useSelector((state) => state.songs.results)
    const favourites = useSelector((state) => state.favourites.present.songs)

    useEffect(() => {
        dispatch(fetchSongsAction("queen"))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (


        <Container fluid>
            <div className="px-4 my-4">
                <div className="d-flex align-items-center">
                    <h4>Your top mixes</h4>
                    <span className="ml-auto">SEE ALL</span>
                </div>
                <Row>
                    {allSongs.map((song, i) => (
                        favourites.some((favSong) => favSong.id === song.id) ? <SingleSong key={song.id} song={song} favourite={true} /> : <SingleSong key={song.id} song={song} favourite={false} />
                    ))}
                </Row>
            </div>
        </Container>

    )
}

export default Songs