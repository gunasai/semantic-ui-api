import React, { useState, useEffect } from 'react';
import { getUsers } from '../services/usersAPI';
import Users from '../components/Users';

const UsersContainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((res) => res && setUsers(res));
  });

  return <Users users={users} />;
};

export default UsersContainer;
