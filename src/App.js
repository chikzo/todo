import React from 'react';
import './style.css';

const App = () => {
  const [todo, setTodo] = React.useState({
    taksName: "",
    description: "",
    dueDate: ""
  });
  const [todoList, setList] = React.useState([]);

  function onSubmitHandler(e) {
    e.preventDefault();

    const addTodo = {
      id: new Date().getTime(),
      todoName: todo.taksName,
      description: todo.description,
      dueDate: todo.dueDate,
      complete: false
    };

    setList([...todoList].concat(addTodo));
    setTodo("")
    console.log(todoList);

    function deleteTodo(id){

      let updatedList = [...todoList].filter((todo)=> todo.id !== id)
      setList(updatedList)

    }

    function completeTodo(id){

      let updatedList=[...todoList].map((todo) => {

        if(todo.id === id){
          todo.complete = !todo.complete;
        }

        return todo; 
      })

      setList(updatedList)
      console.log(todoList);
    }
  }
  return (
    <div>
      <h1>To Do</h1>

      <form onSubmit={onSubmitHandler}>

        <input type="text" 
        value ={todo.taskName} 
        name="taskName"
        placeholder="Task Name"
        onChange={e => setTodo({...todo, taskName:e.target.value})} />

        <input type="text" 
        value ={todo.description} 
        name="description"
        placeholder="Description"
        onChange={e => setTodo({...todo, description:e.target.value})} />

        <input type="date" 
        value={todo.dueDate} 
        name="dueDate"
        onChange={e => setTodo({...todo, dueDate:e.target.value})} />
        
        <button>Add</button>
      </form>

      {todoList.map(data => (
        <div key={data.id}  className="list-style">
          <div>
          {data.todoName}
          {data.description}
          {data.dueDate}

          <div className="button-style">
          <button onClick={() => deleteTodo(data.id)}>Delete</button>
          {
            data.complete === true
            ? (<button onClick={() => completeTodo(data.id)}>Completed</button>)
            : (<button onClick={() => completeTodo(data.id)}>Complete</button>)

          }
          </div>
          
          </div>
         
        </div>
      ))}
    </div>
  );
};
export default App;
