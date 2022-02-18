import React from "react";
import Fetch from "./Fetch";
import DetailedUser from '../MultipleRequests/DetailedUser';

function UserWithFetch({login}) {
    // const onSearchHandler = (searchValue) => {
    //     setLogin(searchValue)
    // }
    return (
        <>
            <Fetch
                uri={login?`https://api.github.com/users/${login}`:''}
                renderSuccess={DetailedUser}/>
        </>
    )
}

//alternative way of calling Fetch
/*        <Fetch
            uri={`https://api.github.com/users/${login}`}
            loadingFallback={<p>Loading...</p>}
            renderError={error => {
                return <p>Something went wrong... {error.message}</p>
            }}
            renderSuccess={({data}) => (
                <>
                    <h1>Todo: Render UI for data</h1>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </>
            )}
        />
    );
}*/

export default UserWithFetch