import { FaThumbsUp, FaComment } from "react-icons/fa";

function Memory(props) {

    return (

        <div className="rows1">
            <div className="content-div" style={{
                backgroundImage: `url("http://localhost:4000/static/${props.image}")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}>
                <div className="flex">
                    <p className="white"><b>{props.name}</b></p>
                    <p className="white">1 Minutes ago</p>
                </div>
            </div>
            <div className="sectin-div">
                <p className="white">{props.location}</p>
                <h1 className="white">{props.title}</h1>
                <p className="white">{props.description}</p>

                <div className="like-delete">
                    <div className="like">
                        <FaThumbsUp className="like-icon" />
                        <span className="like-icon">&nbsp;&nbsp;132,35435</span>

                    </div>
                    <div className="delete">
                        <FaComment className="like-icon" />
                        <span className="like-icon">&nbsp;&nbsp;DELETE</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Memory;
