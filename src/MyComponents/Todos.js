import React from 'react';
import TodoItem from './TodoItem';

const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  };

  return (
    <div className='container my-3' style={myStyle}>
      <h3 className='my-3'>Todo App</h3>
      {props.todos.length === 0 ? "Nothing to display" : 
        props.todos.map((todo) => (
          <div key={todo.sno}>
            <TodoItem todo={todo} onDelete={props.onDelete} />
            <hr />
          </div>
        ))
      }
    </div>
  );
};

export default Todos;

