import axios from "axios";
import {useEffect, useState} from "react";


const UsersComponent = () => {

    const [users, setUsers] = useState(null);
    const [error, setError] = useState(null);

    const getUsersHtmlList = () => {
        console.log(users.length);
        return (
            <ul>
                {users.map(user => <li key={user.id}>{user.name} {user.surname}</li>)}
            </ul>
            );
    }

    const fetchUsers = () => {
        // this will get users from the server using GET method
        axios.get("http://localhost:8080/users", { headers: {"Authorization": `Bearer ${sessionStorage.getItem("app_auth_token")}` } })
            .then(retrievedUsers => {
                setError(null);
                setUsers(retrievedUsers.data);
            })
            .catch(error => {
                setError(error);
                setUsers(null);
            });
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const displayUsersOrError = () => {
        if (users) {
            return (
                <div>
                    <h3>Users</h3>
                    {getUsersHtmlList()}
                </div>
            );
        } else {
            let msg = error ? "Error: " + error : "Unknown error";
            return (
                <div>
                    <h3>Users were not fetched</h3>
                    <p>{msg}</p>
                </div>
            );
        }
    }

    return (
        <div>
            {displayUsersOrError()}
        </div>
    );
}

export default UsersComponent;