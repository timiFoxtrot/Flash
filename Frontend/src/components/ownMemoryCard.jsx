
const OwnMemoryImageCard = ({ image }) => {
    return (
        <div className="ownCardImage">
            <img src={`http://localhost:4000/static/${image}`} alt="..." />
        </div>
    );
}

export default OwnMemoryImageCard;