import React, { useReducer } from 'react';

const firstUser = {
  id: '0391-3233-3201',
  firstName: 'Bob',
  freelancer: false,
};

const Example = () => {
  const [user, setUser] = useReducer(
    (user, newDetails) => ({ ...user, ...newDetails }),
    firstUser,
    (user) => user,
  );

  return (
    <div>
      <h1>
        {user.firstName} — {user.freelancer ? 'Freelancer' : 'On salary'}
      </h1>
      <button
        onClick={() => setUser({ freelancer: true })}
        disabled={user.freelancer}
      >
        {!user.freelancer ? 'Make freelancer' : 'Already freelancer'}
      </button>
    </div>
  );
};

export default Example;
