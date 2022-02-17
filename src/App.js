import './App.css';
import UserRepositories from './components/MultipleRequests/UserRepositories';
import DetailedUser from './components/MultipleRequests/DetailedUser';
import UserWithFetch from './components/FetchingUser/UserWithFetch';
import {useState} from 'react';
import Search from './components/Search/Search';
import {RepoReadme} from './components/MultipleRequests/RepoReadme';

function App() {
    const [login, setLogin] = useState('moonhighway')
    const [repo, setRepo] = useState('learning-react')
    return (
        <div className="App">
            <Search placeholder={'GitHub user name'} onSearch={setRepo}/>
            <UserWithFetch login={login}/>
            <UserRepositories login={login} selectedRepo={repo} onSelect={setRepo}/>
            <RepoReadme login={login} repo={repo}/>
        </div>
    )
}

export default App;
