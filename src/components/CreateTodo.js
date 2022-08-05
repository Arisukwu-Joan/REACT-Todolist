import React, { useState } from "react";
import Todolist from "./Todolist";
import swal from "sweetalert";

function CreateTodo() {
  const [todo, setTodo] = useState({ title: " ", done: false });
  const [todoArr, setTodoArr] = useState([]);


  const todos = localStorage.hasOwnProperty("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

  const onChange = (event) => {
    let {value} = event.target;
    let obj = {};
    obj["title"] = value;
    obj["done"] = false;
    setTodo(obj);
  };

  const CreateTodo = (event) => {
    const { name } = event.target;
    if (event.key === "Enter" || name === "addTodo") {
      if (todo.title !== "") {
        todos.unshift(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
        setTodo({ title: "", done: false });
      } else {
        swal("Oops", "please write todo", "error");
      }
    }
  };

  const completeTodo = (i) => {
    if (todos[i]["done"] !== true) {
      todos[i]["done"] = true;
      localStorage.setItem("todos", JSON.stringify(todos));
      setTodoArr(todos);
      swal("Good Job!");
    }
  };

  const deleteTodo = (i) =>{
    swal({title: "Are you sure?", 
    text: "once deleted, won't be recovered!", 
    icon: "warning",
     button: true,
      dangerMode:true})
      .then(res =>{
      if(res){
        todos.splice(i, 1)
        localStorage.setItem("todos", JSON.stringify(todos))
        setTodoArr(todos)
      }
    })
  }

  

  return (
    <>
      <div className="box">
        <div className="text-end">
          <h1>React Todo App</h1>
        </div>
        <div className="text-addTodo">
          <input
            type="text"
            placeholder="Write Todo..."
            name="todo"
            value={todo.title}
            onKeyPress={CreateTodo}
            onChange={onChange}
          />
          <button
            className="btn-addTodo"
            type="button"
            name="addTodo"
            onClick={CreateTodo}
          >
            Enter
          </button>
        </div>
      </div>
      <Todolist todoArr={todoArr} completeTodo={completeTodo}deleteTodo={deleteTodo} />
    </>
  );
}

export default CreateTodo;
