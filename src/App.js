import {useEffect, useState} from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

import './App.css';

function App() {
  const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
  const [todos, setTodos] = useState(savedTodos);

  useEffect(() => {
    // Save todos to localStorage whenever the todos state changes
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  // const [todos, setTodos] = useState([])

  const addTodo = (text) =>{

    let id = 1;
    if(todos.length > 0 ){
      id = todos[0].id + 1
    }

    const newTodo ={
      text:text,
      id:id,
      key:id,
      complete: false,
    }

    setTodos(() => [newTodo, ...todos])
  }

  const handleDelete = (id) =>{
      const newTodos =  todos.filter((el) => el.id != id)

      setTodos(newTodos, ...todos)
  }

  const handleComplete = (id) =>{
    const updatedTodos =todos.map((el) => {
      if(el.id == id){
        el.complete = !el.complete
      }
      return el
    })

    setTodos(updatedTodos)
  }

  const elements = todos.map((el) => (
    <TodoItem 
      text={el.text}
      id = {el.id}
      key= {el.key}
      todo={el}
      handleDelete ={handleDelete}
      handleComplete ={handleComplete}
      complete={el.complete}
    />
  ))

  // Separate completed and incomplete items
const incompleteElements = elements.filter((el) => !el.props.complete);
const completeElements = elements.filter((el) => el.props.complete);

// Concatenate incomplete and complete items, placing complete items at the bottom
const combinedElements = [...incompleteElements, ...completeElements];

  console.log(todos)

  return (
    <div className="App">
       <button className='reset-button' onClick={() => setTodos([])}>
      Reset
    </button>
      <div className='form'>
        <h1 className='title'>Todo List</h1>
        <TodoForm addTodo={addTodo} />
        {combinedElements}
      </div>
    </div>
  );
}

export default App;
