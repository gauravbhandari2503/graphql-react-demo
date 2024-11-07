// src/components/UserList.tsx
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USERS } from './../../services/userService';
import { UserData } from './../../Types/User';

const UserList: React.FC = () => {
  const { loading, error, data } = useQuery<{ users: UserData }>(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='container'>
        <h1>User List</h1>
        <ul className='user-list'>
        {data?.users?.data.map((user: { id: string; name: string; email: string }) => (
            <li key={user.id}>
            {user.name} - {user.email}
            </li>
        ))}
        </ul>
    </div>
  );
};

export default UserList;
