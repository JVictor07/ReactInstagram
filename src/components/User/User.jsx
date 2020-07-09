import React from 'react';

import { Link } from 'react-router-dom';

import UndefinedUser from "../UndefinedUser/UndefinedUser"

const User = ({ infoUser })  => {
  const {avatar, name, username } = infoUser;

  return (
    <Link to={`/users/${username}`} className="post" data-testid="user">
      <div className="post__header">
        <div className="user">
          <div className="user__thumb">
            {avatar ? <img src={avatar} alt={name} /> : <UndefinedUser alt_name={name}/>}
          </div>
          <h2 className="user__name">{username ? username : "undefined"}</h2>
        </div>
      </div>
    </Link>
  );
};

export default User;
