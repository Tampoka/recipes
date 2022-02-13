import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import colors from "./data/color-data.json";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export const ColorContext = createContext(colors); //need defaultValue -> Child outside Provider will get "Default Value"

ReactDOM.render(
    <React.StrictMode>
        {/*passing initialValue -> Child inside Provider will get "Initial Value"*/}
        <ColorContext.Provider value={colors}>
            <App/>
        </ColorContext.Provider>,
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
