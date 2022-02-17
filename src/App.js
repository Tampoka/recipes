import './App.css';
import UserRepositories from './components/MultipleRequests/UserRepositories';
import DetailedUser from './components/MultipleRequests/DetailedUser';
import UserWithFetch from './components/FetchingUser/UserWithFetch';
import {useState} from 'react';
import Search from './components/Search/Search';
import {RepoReadme} from './components/MultipleRequests/RepoReadme';

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
}

export default App;
