import axios from 'axios';
import { useEffect, useState } from 'react';
import Memory from '../components/memory';
import HashLoader from "react-spinners/ClipLoader"

function PublicMemoryCard() {
    const [memories, setMemories] = useState(null);
    const [loading, setIsloading] = useState(false);

    useEffect(() => {
        const getMemories = async () => {
            setIsloading(true)
            await axios.get("/api/memories")
                .then(results => {
                    setIsloading(false)
                    setMemories(results.data.data.memories)
                })
                .catch(err => console.log(err))
        }
        getMemories()
    }, [])
    return (
        <div >
            {
                loading ?
                    <div className='centerLoader'><HashLoader color="#e6683c" /> </div> :
                    < div className="public" >
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
                    </div >
            }
        </div>
    )

}

export default PublicMemoryCard;