import React, {useCallback, useState} from "react";
import Fetch from "./Fetch";
import DetailedUser from '../MultipleRequests/DetailedUser';
import Search from '../Search/Search';

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

function UserDetails({data}) {
    return (
        <div className="githubUser">
            <img
                src={data.avatar_url}
                alt={data.login}
                style={{width: 200}}
            />
            <div>
                <h1>{data.login}</h1>
                {data.name && <p>{data.name}</p>}
                {data.location && <p>{data.location}</p>}
            </div>
        </div>
    );
}

export default UserWithFetch