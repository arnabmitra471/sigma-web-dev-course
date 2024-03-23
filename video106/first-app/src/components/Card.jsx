import React from 'react'
import proptypes from "prop-types"
import "./Card.css"

const Card = ({title,description}) => {
  return (
    <div className='card'>
        <img src='coding.webp' width={233}/>
      <h1>{title}</h1>
      <p className='card-desc'>{description}</p>
      <button type='button' className='btn'>Go Somewhere</button>
    </div>
  )
}
Card.propTypes = {
    title: proptypes.string.isRequired,
    description: proptypes.string.isRequired
}
export default Card
