import { useState } from 'react';
import Form from '../components/Form/Form';
import Text from '../components/Text/Text';
import { nanoid } from 'nanoid';
import TodoList from '../components/TodoList/TodoList';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const handleFormSubmit = text => {
    const newTodo = {
      text,
      id: nanoid(6),
    };

    setTodos(prev => [...prev, newTodo]);
  };

  return (
    <>
      <Form onSubmit={handleFormSubmit} />
      <TodoList array={todos} />
    </>
  );
};

export default Todos;
