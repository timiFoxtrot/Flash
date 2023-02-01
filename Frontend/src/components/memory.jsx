import { useEffect, useState } from "react";
import { FaThumbsUp, FaComment } from "react-icons/fa";

function Memory(props) {
    const [date, setDate] = useState('');

    useEffect(() => {
        const handleDate = () => {
            const timestamp = props.date;
            const newDate = new Date(timestamp).getTime();
            const currentTime = Date.now();
            const difference = (currentTime - newDate) / 60000;
            if (difference >= 60) {
                console.log(Math.floor(difference / 60) + " hour ago")
                setDate(Math.floor(difference / 60) + " hour ago")
            } else if (difference < 60) {
                console.log(difference + " minutes ago")
                setDate(Math.floor(difference) + " minutes ago")
            }
        }
        handleDate()
    }, [])
    return (

        <div className="rows1">
            <div className="content-div" style={{
                backgroundImage: `url("http://localhost:4000/static/${props.image}")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}>
                <div className="flex">
                    <p className="white"><b>{props.name}</b></p>
                    <p className="white">{date}</p>
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
