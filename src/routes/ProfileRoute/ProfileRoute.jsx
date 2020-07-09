import React, { useState, useEffect } from 'react';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import { useParams } from "react-router-dom"

import Loading from '../../components/Loading';

import users from '../../data/users.json'
import posts_data from '../../data/posts.json'

const ProfileRoute = () => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])
  const { username } = useParams()
  
  /* useEffect(() => {
    fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users?search=${username}`)
      .then(response => response.json())
      .then(data => {
        setUser(data[0])
      })
  }, [username])

  useEffect(() => {
    if(user.id){
      fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${user.id}/posts`)
        .then(response => response.json())
        .then(posts => {
          setPosts(posts)
          setLoading(false)
        })
    }
  }, [user]) */
  
  useEffect(() => {
    const user_found = users.find(user => user.username === username)
    setUser(user_found)
  }, [username])

  useEffect(() => {
    const posts_found = posts_data.filter(post => {
      return post.userId === user.id
    })
    //The setTimeout is something to simulate an API
    setTimeout(() => {
      setPosts(posts_found)
      setLoading(false)
    }, 2000)
  }, [user.id])

  if (loading) {
    return <Loading />
  }

  return (
    <div data-testid="users-route">
      <UserProfile
        avatar={user.avatar}
        name={user.name}
        username={user.username}
      />
      <UserPosts
        posts={posts}
      />
    </div>
  );
};

export default ProfileRoute;
