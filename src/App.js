import './App.css';
import ColorList from './components/ColorsList';
import AddColorForm from './components/AddColorForm';

function App() {
    return (
        <div className="App">
            <AddColorForm/>
            <ColorList/>
        </div>
    )
}

export default App;
