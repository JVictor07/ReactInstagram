import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import UndefinedUser from '../UndefinedUser/UndefinedUser'

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  const [like, setLike] = useState(false)
  const [follow, toggleFollow] = useState(false)

  const {comments, imageUrl} = postInfo

  return (
    <div className="post" data-testid="post">
      {userInfo && postInfo && (
        <div className="post__header">
          <div className="user">
            <Link to={`/users/${userInfo.username}`} className="user__thumb">
              {userInfo.avatar ? (
                <img src={userInfo.avatar} alt={userInfo.name} />
              ) : (
                <UndefinedUser alt_name={userInfo.name}/>
              )}
            </Link>

            <Link to={`/users/${userInfo.username}`} className="user__name">
              {userInfo.name}
            </Link>
          </div>

          <button
            className="post__context"
            onClick={() => toggleFollow(!follow)}
          >
            {follow ? (
              <span className="follow-btn is-following">{"Seguindo"}</span>
            ) : (
              <span className="follow-btn">{"Seguir"}</span>
            )}
          </button>
        </div>
      )}

      {postInfo && (
        <figure className="post__figure">
          <img src={imageUrl} alt="" />
        </figure>
      )}

      {userInfo && postInfo && (
        <nav className="post__controls">
          <button className="post__control" onClick={() => setLike(!like)}>
            {like ? (
              <i className="fas fa-heart" />
            ) : (
              <i className="far fa-heart" />
            )}
          </button>
          {comments.length > 0 && (
            <div className="post__status">
              <div className="user">
                <span>
                  curtido por <Link to="/">{comments[0].name}</Link> e outra
                  {comments.length - 1 + like > 1 && "s"}{" "}
                  <Link to="/">
                    {comments.length - 1 + like} pessoa
                    {comments.length - 1 + like > 1 && "s"}.
                  </Link>
                </span>
              </div>
            </div>
          )}
        </nav>
      )}
    </div>
  );
};

export default Post;
