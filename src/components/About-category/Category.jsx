import React from "react"

const Category = ({data})=>{
 
    return (
        <React.Fragment>
        {
            data.map((item , indx) =>{
                return(
                    <div className="image-container" key={item.key}>
                        <h2> {item.title} </h2>
                        <img src={ item.imgUrl} alt="Web" id="image1" />
                    </div>
                )
            })
        }
        </React.Fragment>
    )
}

export default Category ; 


