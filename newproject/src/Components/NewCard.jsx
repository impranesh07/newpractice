import React from 'react'

//this is props  : how we pass value from parent to child
const NewCard = (props) => {
    //console.log(props.Username,props.age);
    
  return (
        <div className="card">
      <div className="top">
        <img src="https://i.pinimg.com/1200x/5b/67/6b/5b676bd074431c987cd6ed34ee2ef180.jpg"></img>
      </div>
      <div className="container">
        <div className="bold-text">
          <h3>{props.name}</h3>
          </div>
        <p>{props.title}</p> 
      </div>
      <div className="btn">
        <button>Read More</button>
      </div>
    </div>
  )
}

export default NewCard
