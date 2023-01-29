const CreateMemory = () => {
    return (
        <div>
            <div>
                <p>Create new post</p>
            </div>
            <hr />
            <form>
                <div className="user">
                    <label>creator</label>
                    <input type="text" placeholder="creator" />
                </div>
                <div className="title">
                    <label>title</label>
                    <input type="text" placeholder="title" />
                </div>
                <div className="description">
                    <label>Description</label>
                    <input type="text" placeholder="description" />
                </div>
                <div className="location">
                    <label>Location</label>
                    <input type="text" placeholder="location" />
                </div>
                <div className="file">
                    <label>Upload file</label>
                    <input type="file" />
                </div>
                <button>Create</button>
            </form>
        </div>
    );
}

export default CreateMemory;