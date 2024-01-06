import React from 'react'
import './Card.css'
// import Textarea from './Textarea'
// 
const Card = (props) => {
  
  return (
    // <div className='card w-100 h-100 bg '>
    //   <div>{props.value}</div>
    // </div>

      <div className="card">
          {props.value}
      </div>
  )
}

export default Card
