import './App.css';
import Cats from './components/Cats';
import User from './components/User';
import Checkbox from './components/Checkbox';
import Fetching from './components/Fetching';
import GitHubUser from './components/GitHubUser';
import LocalStorage from './components/LocalStorage';
import RequestErrorHandling from './components/RequestErrorHandling';
import RenderingProps from './components/RenderingProps';
import FakerList from './components/FakerList';
import ReactWindowList from './components/ReactWindowList';

function App() {
    return (
        <div className="App">
            <GitHubUser login="Tampoka" />
            {/*<RequestErrorHandling login={"moonhighway"}/>*/}
            {/*<RenderingProps/>*/}
            {/*<FakerList/>*/}
            {/*<ReactWindowList/>*/}
         {/*<Fetching/>*/}
          {/*  <Checkbox/>*/}
          {/*  <Cats/>*/}
        </div>
    )
}

export default App;
