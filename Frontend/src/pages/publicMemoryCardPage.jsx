import PublicMemoryCard from "../components/publicMemoryCard"
const PublicMemoriesPage = () => {
    return (
        <div className="card-roll">
            <div className="headline">Memories</div>
            {/* <Navbar /> */}
            <PublicMemoryCard />
        </div>
    );
}

export default PublicMemoriesPage;