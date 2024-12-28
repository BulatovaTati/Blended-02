import { useState, useEffect } from 'react';
import Form from '../components/Form/Form';

import { nanoid } from 'nanoid';
import TodoList from '../components/TodoList/TodoList';
import EditForm from '../components/EditForm/EditForm';

const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const saveData = JSON.parse(localStorage.getItem('todos'));
    if (saveData) {
      return saveData;
    }
    return [];
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const updateCurrentTodo = todo => {
    setCurrentTodo(todo);
    setIsEditing(true);
  };

  const handleFormSubmit = text => {
    const newTodo = {
      text,
      id: nanoid(6),
    };

    setTodos(prev => [...prev, newTodo]);
  };

  const deleteTodos = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  console.log(currentTodo);

  const updateTodo = text => {
    setTodos(prevTodo =>
      prevTodo.map(todo =>
        todo.id === currentTodo.id ? { ...todo, text } : todo,
      ),
    );
    cancelUpdate();
  };

  const cancelUpdate = () => {
    setIsEditing(false);
    setCurrentTodo({});
  };
  return (
    <>
      {isEditing ? (
        <EditForm
          defaultValue={currentTodo.text}
          updateTodo={updateTodo}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <Form onSubmit={handleFormSubmit} />
      )}
      <TodoList
        array={todos}
        onDelete={deleteTodos}
        updateCurrentTodo={updateCurrentTodo}
      />
    </>
  );
};

export default Todos;
