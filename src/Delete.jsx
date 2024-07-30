import React from "react";

const Delete = (props) => {
    
  return (
    <div className="todo_style">
        <i className="fa fa-times" aria-hidden="true" 
        onClick={()=>props.onSelect(props.id)}/>
        <li>{props.iterables}</li>
    </div>
    
  );
};

export default Delete