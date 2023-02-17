import axios from 'axios';
import { useContext, useEffect, useState, useCallback } from 'react';
import Memory from '../components/memory';
import HashLoader from "react-spinners/ClipLoader"
import { MemoryContext } from '../contexts/memoryContext';
import { UserContext } from '../contexts/userContext';
import NavbarMobile from './navbarMobile';

function PublicMemoryCard() {
    const { state, dispatch } = useContext(MemoryContext)
    const { userState } = useContext(UserContext)
    const [loading, setIsloading] = useState(false);

    const fetchData = useCallback(async () => {
        setIsloading(true)
        await axios.get("/api/memories", {
            headers: {
                authorization: `Bearer ${userState.user?.token || "backup"}`,
            }
        })
            .then(results => {
                setIsloading(false)
                console.log(results.data.data.memories)
                dispatch({ type: "GET_ALL_MEMORIES", payload: results.data.data.memories })
            })
            .catch(err => {
                console.log({ error: err.message })
            })
    }, [userState, dispatch]);

    useEffect(() => {
        fetchData()
    }, [fetchData])
    return (
        <div >
          <NavbarMobile />
            {
                loading ?
                    <div className='centerLoader'><HashLoader color="#e6683c" /> </div> :
                    < div className="public" >
                        <div className="public__header">
                            {
                                state.memories && state.memories.map((post) => (
                                    <div key={post._id}>
                                        <Memory
                                            image={post.photo.url}
                                            name={post.user_name}
                                            title={post.title}
                                            location={post.location}
                                            description={post.description}
                                            date={post.createdAt}
                                            user={post.user_id}
                                        />
                                    </div>
                                ))
                            }

                        </div>
                    </div >
            }
        </div>
    )

}

export default PublicMemoryCard;