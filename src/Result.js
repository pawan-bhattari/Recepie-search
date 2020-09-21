import React from 'react'
import "./Result.css"
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

function Result({image,calories,label}) {
   
    return (
        
        <div className="pawan">
         
         <img  src={image} alt="kalar" />

         <div className="card__info">
        
         <h2>  {label} </h2>
         <h4>  {calories} <ThumbUpAltIcon/> </h4> 
    
   </div>
   </div>
    )
}

export default Result
