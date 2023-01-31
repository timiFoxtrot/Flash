import { FaBars, FaBell, FaCog, FaHome, FaMoon, FaPlus, FaSearch, FaUser } from "react-icons/fa"
import { StyledSidebar } from "../styles/sidebar.styled";
import CreateMemory from "./addMemoryForm";
import SearchBarDestop from "./searchBarDesktop";
const SideBar = () => {
    return (
        <StyledSidebar>
            <SearchBarDestop />
            <CreateMemory />
            <div>
                <div className="logo">Flash</div>
                <ul className="navLinks">
                    <li>
                        <FaHome className="link-icon" />
                        <span>Home</span>
                    </li>
                    <li>
                        <FaSearch className="link-icon" />
                        <span>Search</span>
                    </li>
                    <li>
                        <FaBell className="link-icon" />
                        <span>Notifications</span>
                    </li>
                    <li>
                        <FaPlus className="link-icon" />
                        <span>Create</span>
                    </li>
                    <li>
                        <FaUser className="link-icon" />
                        <span>Profile</span>
                    </li>
                </ul>
            </div>
            <ul className="more">
                <li>
                    <span>Settings</span>
                    <FaCog className="setting-icon" />
                </li>
                <li>
                    <span>Switch Appearance</span>
                    <FaMoon className="setting-icon" />
                </li>
                <li>
                    <span>Log out</span>
                </li>
            </ul>
            <div className="moreBtn">
                <FaBars className="link-icon" />
                <span>More</span>
            </div>
        </StyledSidebar>
    );
}

export default SideBar;