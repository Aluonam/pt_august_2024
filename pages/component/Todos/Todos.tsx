import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTodos, TodoPropsType } from '../../api/todoApi';

const Todos = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });

  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>Error: {error.message}</span>;

  return (
    <ul>
      {data.map((todo: TodoPropsType) => ( //el tipado de todo es la interfaz TodoPropsType importada de todoApi.ts
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default Todos;