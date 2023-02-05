import { FaTimes } from "react-icons/fa";
import { StyledEditForm } from "../styles/editForm.styled"

const EditMemory = ({ onCloseEdit }) => {
    // const [creator, setCreator] = useState('')
    // const [title, setTitle] = useState('')
    // const [description, setDescription] = useState('')
    // const [location, setLocation] = useState('')

    return (
        <StyledEditForm>
            <FaTimes className="close2" onClick={onCloseEdit} />
            <form>
                <div className="title field">
                    <label>title</label>
                    <input
                        type="text"
                        placeholder="title"
                    />
                </div>
                <div className="description field">
                    <label>Description</label>
                    <textarea
                        rows="4"
                        cols="50"
                        placeholder="Your description..."
                    >
                    </textarea>
                </div>
                <button>Update</button>
            </form>
        </StyledEditForm>
    );
}

export default EditMemory;