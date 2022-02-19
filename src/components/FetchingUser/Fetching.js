import React, {useEffect, useState} from 'react';

const Fetching = () => {
    console.log('render')
    const [user, setUser] = useState({})

    useEffect(() => {
        fetch(`https://api.github.com/users/Tampoka`)
            .then(response => response.json())
            .then(setUser)
            .then(console.log)
            .catch(console.error);
    }, [])

    // useEffect(() => {
    //     fetch(`https://api.github.com/users/Tampoka`,
    //         {
    //             method: "GET",
    //             headers: {
    //                 Authorization: `Bearer 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`
    //             }
    //         })
    //         .then(response => response.json())
    //         .then(setUser)
    //         .catch(console.error);
    // }, [])

    // const userName = 'Tampoka'

    // const init = (userName) => requestGitHubUser(userName)
    //
    // function requestGitHubUser(userName) {
    //     fetch(`https://api.github.com/users/${userName}`)
    //         .then(data => data.json())
    //         .then(res => res)
    //     // console.log(response.json())
    //     // console.log(result)
    //     // return result
    //
    // }
    //
    //
    // const [user, setUser] = useReducer(() => user, userName, init)

    console.log(user)
    return (
        <div>
            <p>{user.login}</p>
            <img src={user.avatar_url} alt="Avatar"/>
            <p>{user.followers}</p>
            <p>{user.location}</p>

        </div>
    );
};

export default Fetching;