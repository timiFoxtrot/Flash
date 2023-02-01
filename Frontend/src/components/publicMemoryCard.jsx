import axios from 'axios';
import { useEffect, useState } from 'react';
import Memory from '../components/memory';

function PublicMemoryCard() {
    const [memories, setMemories] = useState(null);

    useEffect(() => {
        const getMemories = async () => {
            await axios.get("/api/memories")
                .then(results => setMemories(results.data.data.memories))
                .catch(err => console.log(err))
        }
        getMemories()
    }, [])
    return (
        <div className="public">
            <div className="public__header">
                {
                    memories && memories.map((post) => (
                        <Memory
                            key={post._id}
                            image={post.photo}
                            name={post.user_name}
                            title={post.title}
                            location={post.location}
                            description={post.description}
                            date={post.createdAt}
                        />
                    ))
                }

            </div>
        </div>
    )

}

export default PublicMemoryCard;