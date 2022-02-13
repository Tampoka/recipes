import './App.css';
import Menu from './components/Menu';
import data from "./data/recipes.json";
import colorData from "./data/color-data.json";
import {useState} from 'react';
import ColorList from './components/ColorsList';

function App() {
    const [colors, setColors] = useState(colorData)

    return (
        <div className="App">
            <ColorList colors={colors}/>
             {/*<Menu recipes={data}/>*/}
        </div>
    )
}

export default App;
