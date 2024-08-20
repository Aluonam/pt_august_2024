import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchUsers, UsersPropsType } from '../../api/usersList';

const UserList = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['userList'],
    queryFn: fetchUsers,
  });

  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>Error: {error.message}</span>;

  return (
    <ul>
      {data.map((user: UsersPropsType) => ( //el tipado de todo es la interfaz TodoPropsType importada de todoApi.ts
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;