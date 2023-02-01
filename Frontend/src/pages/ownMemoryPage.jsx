import { StyledOwnMemoryPage } from "../styles/ownMemory.styled";
import OwnMemoryImageCard from "../components/ownMemoryCard";
import { Link } from "react-router-dom";
const OwnMemoryPage = () => {
    return (
        <StyledOwnMemoryPage>
            <div className="container">
                <header>
                    <div className="img"></div>
                    <div>
                        <div className="flex2">
                            <span>akaricypher</span>
                            <span className="editprofile">Edit Profile</span>
                        </div>
                        <div>12 posts</div>
                    </div>
                </header>
                <section className="grid">
                    <Link to="/home/singleMemoryPage"><OwnMemoryImageCard /></Link>
                    <Link to="/home/singleMemoryPage"><OwnMemoryImageCard /></Link>
                    <Link to="/home/singleMemoryPage"><OwnMemoryImageCard /></Link>
                    <Link to="/home/singleMemoryPage"><OwnMemoryImageCard /></Link>
                    <Link to="/home/singleMemoryPage"><OwnMemoryImageCard /></Link>
                    <Link to="/home/singleMemoryPage"><OwnMemoryImageCard /></Link>
                </section>
            </div>
        </StyledOwnMemoryPage>
    );
}

export default OwnMemoryPage;