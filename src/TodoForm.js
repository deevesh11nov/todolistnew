import React, { useState } from 'react';

const TodoForm = (props) => {
  const [textTodo, setTextTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addTodo(textTodo);

    // Clear the input field after adding a todo
    setTextTodo('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={textTodo}
          onChange={(e) => setTextTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
