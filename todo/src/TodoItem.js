import React from 'react';

function TodoItem(props) {
  return(
    <div>
      <ul>
        {props.todo.map((item, index) => {
          return (
            <div key={index}>
              <li>{props.todo[index]}</li>
              <button onClick={() => console.log(props.todo)}>delete</button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default TodoItem;