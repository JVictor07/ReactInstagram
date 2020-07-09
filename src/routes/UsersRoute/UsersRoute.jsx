import React from 'react';

import UsersList from '../../containers/UsersList/UsersList';

/* import { getUsers } from "../../services/users" */

import users from '../../data/users.json'

/* import Loading from '../../components/Loading'; */

const UsersRoute = () => {
  /* const [users, setUsers] = useState([]) */
  /* const [loading, setLoading] = useState(true) */

  /* useEffect(() => {
    getUsers().then(users => {
      setUsers(users)
      setLoading(false)
    })
  }, []) */

  /* if (loading) {
    return <Loading />
  } */

  return (
    <div className="container" data-testid="profile-route">
      <UsersList users={users} />
    </div>
  );
};

export default UsersRoute;
