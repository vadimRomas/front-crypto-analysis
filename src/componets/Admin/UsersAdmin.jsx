import {useEffect, useState} from "react";
import $api from "../../services/intercaptor";
import type {User} from "../../interface/UserInterface";

export const UsersAdmin = () => {
    const [users: Array<User>, setUsers] = useState([]);

    useEffect(() => {
        $api.get('admin/users')
            .then(response => setUsers(response.data))
            .catch(error => alert(error));
    }, []);

    return (
      <div>
          {users.map(user => <p>{user.first_name} {user.last_name}</p>)}
      </div>
  );
}