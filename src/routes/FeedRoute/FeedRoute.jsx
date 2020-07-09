import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

import posts_data from '../../data/posts.json'
import stories_data from '../../data/stories.json'
import users_data from '../../data/users.json'


const FeedRoute = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  /* const [usersFetched, setUsersFetched] = useState(0); */

  const getUserPostById = (postUserId) => users.find(user => postUserId === user.id);

  useEffect(() => {
    //To simulate an API
    setTimeout(() => {
      setUsers(users_data)
      setPosts(posts_data)
      setStories(stories_data)
      setLoading(false)
    }, 2000);
  }, [])
  
  /* useEffect(() => {
    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users')
      .then((res) => res.json())
      .then(data => setUsers(data));
  }, []);

  useEffect(() => {
    if (usersFetched === users.length) {
      return;
    }

    fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${users[usersFetched].id}/posts`)
      .then((res) => res.json())
      .then(data => {
        setPosts([...posts, ...data]);
        setUsersFetched(usersFetched + 1);
        setLoading(false)
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users, usersFetched]);

  useEffect(() => {
    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories')
      .then((res) => res.json())
      .then(data => {
        setStories(data);
      });
  }, []); */

  if (loading) {
    return <Loading/>
  }

  return (
      <div data-testid="feed-route">
        <Stories 
          stories={stories}
          getUserHandler={getUserPostById}
        />
        <div className="feed">
          <Posts 
            posts={posts}
            getUserHandler={getUserPostById}
          />
        </div>
      </div>
  );
};

export default FeedRoute;
