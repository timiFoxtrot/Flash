import { FaAngleDown } from "react-icons/fa";
import logo from "../images/logo.png";
import woman from "../images/woman.png";
import { Link } from "react-router-dom"
function LandingPage() {
    return (
        <div className="landingPage__container">
            <header className="header ">
                <div className="logo">
                    <img src={logo} alt="" width="50" />
                    <h2>Flash </h2>
                </div>

                <div className="login-signup " >
                    <Link className="but-login" to="/login">Log in</Link>
                    <Link className="butIcon-signup" to="/signup">Sign Up</Link>
                </div>
            </header>

            <main className="main-app">
                <div className="main-content">
                    <div className="left-side">
                        <h1 className="alw">Flash  Into<br />
                            <span className="shift-provide"></span><span className="provide"> Your</span> <br /> <span className="memo">Memory</span><span className="provide2"></span></h1>
                        <p className="paratext">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis eveniet nesciunt, quaerat laudantium beatae et eaque iure itaque autem. Rem sunt molestiae perspiciatis distinctio soluta mollitia magni cum quis eaque?</p>
                        <Link className="butIcon-signup always-own" to="/home/public">Start the assignment</Link>

                    </div>
                    <div className="right-side">

                        <img src={woman} alt="" width="450" height="500px" />


                    </div>
                </div>

            </main>
        </div>

    );


}
export default LandingPage;