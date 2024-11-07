import React from 'react';
import './../../assets/css/App.css';
import UserList from './../User/UserList';
import AddUserForm from './../User/AddUserForm';

const App: React.FC = () => {
  return (
    <div className="container">
      <UserList />
      <AddUserForm />
    </div>
  );
};

export default App;
