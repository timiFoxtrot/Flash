import { FaThumbsUp,FaComment } from "react-icons/fa";

function Memory(props){
         return(
                
            <div className="rows1">
                        <div className="content-div" style={{
                            backgroundImage: `url("${props.image}")`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat", 
        }}>
                            <p  className="white"><b>{props.messages}</b></p>
                            <p className="white">1 Minutes ago</p>
                        </div>
                        <div className="sectin-div">
                            <p  className="white">{props.messages}</p>
                            <h1 className="white">ENFXFJDFGKCK</h1>
                            <p  className="white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus non sint adipisci soluta ipsum libero, laboriosam unde, odio doloribus eligendi consequuntur placeat voluptatibus maiores voluptate, nulla pariatur quo rati</p>

                            <div className="like-delete">
                            <div className="like">
                            <FaThumbsUp className="like-icon"/>
                            <span className="like-icon">&nbsp;&nbsp;132,35435</span>

                                </div>
                                <div className="delete">
                                    <FaComment className="like-icon"/>
                                    <span className="like-icon">&nbsp;&nbsp;DELETE</span>


                                </div>

                            </div>


                        </div>
                    </div>
         );
   
        
}
export default Memory;
