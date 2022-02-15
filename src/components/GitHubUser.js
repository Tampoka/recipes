import React from 'react';
import {useFetch} from '../customHooks/useFetch';

const GitHubUser = ({login}) => {
    /*    const [data, setData] = useState();

        useEffect(() => {
            if (!login) return;
            fetch(`https://api.github.com/users/${login}`)
                .then(response => response.json())
                .then(setData)
                .catch(console.error);
        }, [login]);

        if (data)
            return <pre>{JSON.stringify(data, null, 2)}</pre>;
        return null;*/

//with custom hook useFetch
    const {loading, data, error} = useFetch(
        `https://api.github.com/users/${login}`
    );
    if (loading) return <h1>loading...</h1>;
    if (error)
        return <pre>{JSON.stringify(error, null, 2)}</pre>;

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

export default GitHubUser;