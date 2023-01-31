
import Memory from '../components/memory';
import pic1 from "../images/stories/pic1.jpeg";
import pic2 from "../images/stories/pic2.jpeg";
import pic3 from "../images/stories/pic3.jpeg";
import pic4 from "../images/stories/pic4.jpeg";
import pic5 from "../images/stories/pic5.jpeg";

function PublicMemoryCard(){
        const listOfMemory = [
            {image:pic1,name:"Jenifer",message:"JENNY"},
            {image:pic2,name:"sofila",message:"Jenifer Jenifer"},
            {image:pic3,name:"elena",message:"Jenifer Jenifer"},
            {image:pic4,name:"sam",message:"Jenifer Jenifer"},
            {image:pic5,name:"Jenifer",message:"Jenifer Jenifer"},
            {image:pic1,name:"sofila",message:"Jenifer Jenifer Jenifer"},
            {image:pic2,name:"elena",message:"Jenifer"},
            {image:pic3,name:"sam",message:"Jenifer Jenifer Jenifer"},
            {image:pic4,name:"Jenifer",message:"Jenifer Jenifer Jenifer Jenifer"},
            {image:pic5,name:"sam",message:"Jenifer"},
          ]
    return(
        <div className="public">

            <div className="public__header">
            {
            listOfMemory.map((values, index) => (
        <Memory key={index} image={values.image} names={values.name} messages={values.message}>{values}</Memory>
      ))
      }

                </div>
        </div>
    )

}

export default PublicMemoryCard;