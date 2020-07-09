import React from 'react';

import User from '../../components/User';

import './UsersList.scss';

const UserList = ({ users }) => {
  return (
    <section className="users-list" data-testid="user-list">
      {users.map(user => (
        <User 
        infoUser={{
          avatar: user.avatar,
          name: user.name, 
          username: user.username
        }}/>
      ))}
    </section>
  )
};

export default UserList;
