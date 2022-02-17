import './App.css';
import UserRepositories from './components/MultipleRequests/UserRepositories';
import DetailedUser from './components/MultipleRequests/DetailedUser';
import UserWithFetch from './components/FetchingUser/UserWithFetch';

function App() {
    return (
        <div className="App">
            <UserWithFetch/>
        </div>
    )
}

export default App;
