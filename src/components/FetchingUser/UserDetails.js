import React from 'react';

export function UserDetails({ avatar_url, login, name, location }) {
  return (
    <div className="githubUser">
      <img src={avatar_url} alt="avatar" style={{ width: 200 }} />
      <div>
        <h1>{login}</h1>
        {name && <p>{name}</p>}
        {location && <p>{location}</p>}
      </div>
    </div>
  );
}
