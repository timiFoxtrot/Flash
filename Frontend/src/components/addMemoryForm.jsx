import { useState } from "react";
import { StyledCreateMemory } from "../styles/createMemory.styled";
import axios from "axios";
import { useContext } from "react";
import { MemoryContext } from "../contexts/memoryContext";

const CreateMemory = () => {
    const { state, setState } = useContext(MemoryContext)
    const [creator, setCreator] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [file, setFile] = useState('')

    const handleFile = (e) => {
        console.log(e.target.files)
        setFile(e.target.files[0])
    }
    const handleCreate = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("user_name", creator)
        formData.append("title", title)
        formData.append("description", description)
        formData.append("location", location)
        formData.append("image", file)

        const URL = "http://localhost:4000/api/memories";
        const response = await axios.post(URL, formData)
        setState(response.data)
        console.log(response.data)
    }


    return (
        <StyledCreateMemory>
            <div>
                <p>Create new memory</p>
            </div>
            <hr />
            <form onSubmit={handleCreate} encType="multipart/form-data">
                <div className="user field">
                    <label>creator</label>
                    <input
                        type="text"
                        value={creator}
                        placeholder="creator"
                        onChange={(e) => setCreator(e.target.value)}
                    />
                </div>
                <div className="title field">
                    <label>title</label>
                    <input
                        type="text"
                        placeholder="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="description field">
                    <label>Description</label>
                    <textarea
                        value={description}
                        rows="4"
                        cols="50"
                        placeholder="Your description..."
                        onChange={(e) => setDescription(e.target.value)}
                    >
                    </textarea>
                </div>
                <div className="location field">
                    <label>Location</label>
                    <input
                        type="text"
                        placeholder="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div className="file field">
                    <label>Drag Photos here</label>
                    <input
                        type="file"
                        onChange={handleFile}
                    />
                </div>
                <button>Create</button>
            </form>
        </StyledCreateMemory>
    );
}

export default CreateMemory;