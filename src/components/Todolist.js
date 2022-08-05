import React from "react";

function Todolist(props) {
  const { completeTodo, deleteTodo } = props;
  const todoArr =
    props.todoArr.length > 0
      ? props.todoArr
      : JSON.parse(localStorage.getItem("todos"));

  return (
    <div className="todo-list">
      <ul>
        {todoArr && todoArr.length > 0
          ? todoArr.map((el, i) => (
              <li key={1}>
                <div className={el["done"] ? "line-through" : null}>
                  {el.title}
                </div>
                <div className="icon">
                  <i
                    title="complete"
                    onClick={() => completeTodo(i)}
                    className={`fas fa-check circle pointer ${
                      el["done"] ? "green" : "blue"
                    }`}
                    completeTodo={completeTodo}
                  />
                  <i title="Edit" className="fas fa-pen-to-square pointer"></i>                 
                  <i title="delete" onClick={() => deleteTodo(1)} className="fas fa-trash-alt pointer" />
                </div>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default Todolist;
