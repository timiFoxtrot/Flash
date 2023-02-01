import { useState, useContext } from "react";
import { FaBars, FaBell, FaCog, FaHome, FaMoon, FaPlus, FaSearch, FaUser } from "react-icons/fa"
import { StyledSidebar } from "../styles/sidebar.styled";
import { Link } from "react-router-dom";
import CreateMemory from "./addMemoryForm";
import SearchBarDestop from "./searchBarDesktop";
import { ThemeConText } from "../contexts/themeContext";


const SideBar = () => {
    const { theme, setTheme } = useContext(ThemeConText)
    const [createModal, setCreateModal] = useState(false)
    const [searchModal, setSearchModal] = useState(false)
    const [more, setMore] = useState(false)
    const handleCreateModal = () => {
        setCreateModal(!createModal)
    }
    const handleSearchModal = () => {
        setSearchModal(!searchModal)
    }

    const handleCloseSearchModal = () => {
        setSearchModal(false)
    }

    const handleMore = () => {
        setMore(!more)
    }

    const handleTheme = () => {
        console.log(theme)
        setTheme(!theme)
    }

    return (
        <StyledSidebar>
            {createModal && <div className="shadow"></div>}
            {searchModal && <SearchBarDestop handleClose={handleCloseSearchModal} />}
            {createModal && <CreateMemory handleCreateModal={handleCreateModal} />}
            <div>
                <div className="logo">Flash</div>
                <ul className="navLinks">
                    <li>
                        <Link className="home-link" to="/home/public">
                            <FaHome className="link-icon" />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li onClick={handleSearchModal}>
                        <FaSearch className="link-icon" />
                        <span>Search</span>
                    </li>
                    <li>
                        <FaBell className="link-icon" />
                        <span>Notifications</span>
                    </li>
                    <li onClick={handleCreateModal}>
                        <FaPlus className="link-icon" />
                        <span >Create</span>
                    </li>
                    <li>
                        <Link to="/home/ownMemory">
                            <FaUser className="link-icon" />
                            <span>Profile</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <ul className={more ? "more" : "offMore"}>
                <li>
                    <span>Settings</span>
                    <FaCog className="setting-icon" />
                </li>
                <li onClick={handleTheme}>
                    <span>Switch Appearance</span>
                    <FaMoon className="setting-icon" />
                </li>
                <li>
                    <span>Log out</span>
                </li>
            </ul>
            <Link to="#" onClick={handleMore} className="moreBtn">
                <FaBars className="link-icon" />
                <span>More</span>
            </Link>
        </StyledSidebar>
    );
}

export default SideBar;