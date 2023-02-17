import { FaHome, FaPlus, FaUser } from "react-icons/fa"
import { StyledFooterMobile } from "../styles/sideBarMobile.styled";
import { useContext } from "react";
import { Link} from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import { ModalContext } from "../contexts/modalContext";
import CreateMemory from "./addMemoryForm";

const SideBarMobile = () => {
    const { userState } = useContext(UserContext)
    const {modals, setModals} = useContext(ModalContext)

     const handleCreateModal = () => {
        setModals({ ...modals, createModal: true })
    }
    return (
        <StyledFooterMobile>
            {modals.createModal && <CreateMemory />}
            <div>
                <ul className="navLinks flex">
                    <Link className="home-link" to="/home/public">
                        <li>
                            <FaHome className="link-icon" />
                        </li>
                    </Link>
                    <li className="round">
                        <FaPlus onClick={handleCreateModal} className="link-icon" />
                    </li>
                    {userState ? <Link to={`/home/ownMemory/user/${userState.user?.username || "backup"}`}>
                        <li>
                            <FaUser className="link-icon" />
                        </li>
                    </Link> : <span></span>}
                </ul>
            </div>
        </StyledFooterMobile>
    );
}
 
export default SideBarMobile;