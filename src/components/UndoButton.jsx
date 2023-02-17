import { Button } from "react-bootstrap"
import { ActionCreators } from "redux-undo"
import store from "../redux/store"

const UndoButton = () => {
    return (
        <Button className="undo-button" onClick={() => {
            store.dispatch(ActionCreators.undo())
        }}>Undo</Button>
    )
}

export default UndoButton