import Box from "./box";
import pic1 from "../images/stories/pic1.jpeg";
import pic2 from "../images/stories/pic2.jpeg";
import pic3 from "../images/stories/pic3.jpeg";
import pic4 from "../images/stories/pic4.jpeg";
import pic5 from "../images/stories/pic5.jpeg";
import { Link } from "react-router-dom"

function Navbar() {
    const listOfQuestions = [
        { image: pic1, name: "Jenifer" },
        { image: pic2, name: "sofila" },
        { image: pic3, name: "elena" },
        { image: pic4, name: "sam" },
        { image: pic5, name: "Jenifer" },
        { image: pic1, name: "sofila" },
        { image: pic2, name: "elena" },
        { image: pic3, name: "sam" },
        { image: pic4, name: "Jenifer" },
        { image: pic5, name: "sam" },
    ]
    return (
        <div className="navbar">
            <div className="app-header">
            </div>
            <div className="nave-bar-row">
                <div className="nave-bar-container">
                    {
                        listOfQuestions.map((values, index) => (
                            <Link key={index} to="/home/ownMemory"><Box image={values.image} names={values.name}>{values}</Box></Link>
                        ))}
                </div>
            </div>

        </div>
    )
}

export default Navbar;