import { FaHome } from "react-icons/fa"
import { StyledSidebar } from "../styles/sidebar.styled";
const SideBar = () => {
    return (
        <StyledSidebar>
            <div>
                <div className="logo">Flash</div>
                <ul className="navLinks">
                    <li>
                        <FaHome />
                        <span>Home</span>
                    </li>
                    <li>
                        <FaHome />
                        <span>Home</span>
                    </li>
                    <li>
                        <FaHome />
                        <span>Home</span>
                    </li>
                    <li>
                        <FaHome />
                        <span>Home</span>
                    </li>
                    <li>
                        <FaHome />
                        <span>Home</span>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <span>Settings</span>
                        <FaHome />
                    </li>
                    <li>
                        <span>Switch Appearance</span>
                        <FaHome />
                    </li>
                    <li>
                        <span>Log out</span>
                        <FaHome />
                    </li>
                </ul>
                <div>
                    <FaHome />
                    <span>More</span>
                </div>
            </div>
        </StyledSidebar>
    );
}

export default SideBar;