import './App.css';
import Menu from './components/Menu';
import data from "./data/recipes.json";
import colorData from "./data/color-data.json";
import {useState} from 'react';
import ColorList from './components/ColorsList';

function App() {
    const [colors, setColors] = useState(colorData)
    const onRemoveColor=(id)=>{
        const updatedColors=colors.filter(c=>c.id!==id)
        setColors(updatedColors)
    }
    const onRateColor=(id,rating)=>{
        const updatedColors=colors.map(c=>c.id===id? {...c,rating}:c)
        setColors(updatedColors)
    }

    return (
        <div className="App">
            <ColorList colors={colors} onRemoveColor={onRemoveColor} onRateColor={onRateColor}/>
             {/*<Menu recipes={data}/>*/}
        </div>
    )
}

export default App;
