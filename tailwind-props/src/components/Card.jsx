import React from 'react'

function Card({name , image}) {
    console.log(name);
    
  return (
    <>
    <div className="card">
        <img src={image} />
        <div className="card-body">
          <h2 className="card-title">About {name}</h2>
          <p className="card-text">
            This is a simple card component. You can use it to display content in a structured way.
          </p>
          <a href="#" className="card-button">Learn More</a>
        </div>
    </div>
    </>
  )
}

export default Card