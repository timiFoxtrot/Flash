import { FaSearch, FaTimes } from "react-icons/fa";
import { StyledSearchBarDestop } from "../styles/searchBar.Styled";

const SearchBarDestop = () => {
    return (
        <StyledSearchBarDestop>
            <div className="top-flex">
                <h3>Search</h3>
                <FaTimes />
            </div>
            <div className="search-box">
                <FaSearch className="smallSearchIcon" />
                <input type="text" placeholder="Search" />
            </div>
            <hr />
            <ul className="display-box">
                <li>
                    <div>
                        <span>image</span>
                        <div className="avatar-text">
                            <h6>username</h6>
                            <small>firstname lastname</small>
                        </div>
                    </div>
                </li>
            </ul>
        </StyledSearchBarDestop>
    );
}

export default SearchBarDestop;