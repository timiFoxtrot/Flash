import { Actions } from "../components/actions";
import { StyledSingleMemoryPage } from "../styles/singlememory.style";

const SingleMemoryPage = () => {
    return (
        <StyledSingleMemoryPage>
            <div className="container">
                <div className="left">
                        <div>
                            <img src="https://images.pexels.com/photos/4255486/pexels-photo-4255486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="addednew-img" />
                        </div>
                </div>
                <div className="right">
                            <div>Back button</div>
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
            </div>
        </StyledSingleMemoryPage>
    );
}

export default SingleMemoryPage;