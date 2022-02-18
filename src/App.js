import './App.css';
import {useEffect, useState} from 'react';
import Search from './components/Search/Search';
import {client, query} from './graphql/testRequest';
import {UserDetails} from './components/FetchingUser/UserDetails';
import List from './components/RenderProps/List';

/*
function App() {
    const [login, setLogin] = useState('moonhighway')
    const [repo, setRepo] = useState('css-layout')


    const handleSearch=(login)=>{
        if(login) return setLogin(login)
        setLogin('')
        setRepo('')
    }

    if(!login) return (
<Search placeholder={'GitHub user name'} onSearch={handleSearch}/>
    )
    return (
        <div className="App">
            <Search placeholder={'GitHub user name'} onSearch={handleSearch}/>
            {login && <UserWithFetch login={login}/>}
            {login && (
                <UserRepositories
                    login={login}
                    repo={repo}
                    onSelect={setRepo}/>)}
            {login && repo && (
                <RepoReadme
                    login={login}
                    repo={repo}/>)}
        </div>
    )
}*/

export default function App() {
    const [login, setLogin] = useState("moontahoe");
    const [userData, setUserData] = useState();
    console.log(userData)
    useEffect(() => {
        client
            .request(query, { login })
            .then(({ user }) => user)
            .then(setUserData)
            .catch(console.error);
    }, [client, query, login]);
    if (!userData) return <p>loading...</p>;
    return (
        <div className='App'>
            <Search value={login} onSearch={setLogin} />
            <UserDetails {...userData} />
            <p>{userData.repositories.totalCount} — repos</p>
            <List
                data={userData.repositories.nodes}
                renderItem={repo => <span>{repo.name}</span>}
            />
        </div>
    );
}

