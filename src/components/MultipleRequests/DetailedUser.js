import React from 'react';
import UserRepositories from './UserRepositories';

const DetailedUser = ({data: {avatar_url, location, login, name}}) => {
    return (
        <div className="githubUser">
            <img src={avatar_url} alt={login} style={{ width: 200 }} />
            <div>
                <h1>{login}</h1>
                {name && <p>{name}</p>}
                {location && <p>{location}</p>}
            </div>
        </div>
    );
};

export default DetailedUser;