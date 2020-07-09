import React from 'react';

import './UserProfile.scss';
import UndefinedUser from '../../components/UndefinedUser/UndefinedUser'

const UserProfile = ({ avatar, name, username }) => {
  return (
    <section className="profile" data-testid="user-profile">
      <div className="profile-data">
        <div className="user">
          <div className="user__thumb">
            {avatar ? (
              <img src={avatar} alt={name} />
            ) : (
              <UndefinedUser alt_name={name} />
            )}
          </div>
          <h2 className="user__name">
            {name}
            <span>@{username}</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
