import { Actions } from "../components/actions";

const SingleMemoryPage = () => {
    return (
        <section>
            <div>Back button</div>
            <div>
                <img src="fjjfjf" alt="..." />
            </div>
            <div>
                <div>
                    <h3>Name</h3>
                    <Actions />
                </div>
                <hr />
                <p>Description</p>
                <div className="commentsBox">
                    <h4>Comments</h4>
                    <p>these are comments</p>
                </div>
                <div>
                    <span>Likes icon</span>
                    <span>Comments icon</span>
                </div>
                <div className="commentsBox">
                    <input type="text" value="comments" />
                </div>
            </div>
        </section>
    );
}

export default SingleMemoryPage;