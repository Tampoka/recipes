import React, {useEffect, useState} from 'react';

const Users = () => {

    const users = [
        {name: "Bob"},
        {name: "Alex"},
        {name: "John"},
    ]

    const [appUsers, setUsers] = useState(users)
    const [name, setName] = useState('')
    const [count, setCount] = useState(0)
    const addUser = name => setUsers(allUsers => [{name}, ...allUsers]);

    return (
        <>
            <span>{count} </span>
            <button onClick={() => setCount(current => current + 5)}>Increase count</button>
            <hr/>
            <input type="text" value={name} onChange={e => setName(e.currentTarget.value)}/>
            <button onClick={() => addUser(name)}>Add user</button>
            <ul>
                {appUsers.map(u => <li key={Date.now() + Math.random()}>{u.name}</li>)}
            </ul>
        </>
    );
};

export default Users;