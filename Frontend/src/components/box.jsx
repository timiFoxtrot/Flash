function  Box(props){
    return (
        <div className="arrangeBox">
             <div className="box" >
            <img src={props.image}  alt=""  />
            </div>
            <p>{props.names}</p>
        </div>
       
        

    )
}
export default Box;