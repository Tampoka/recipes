import './App.css';
import Rerender from './components/Rerender';
import TypingPhrase from './components/TypingPhrase';
import Layout from './components/Layout';
import Resizing from './components/Resizing';

function App() {
    return (
        <div className="App">
            {/*<Rerender>*/}
            {/*    You are not going to believe this but...*/}
            {/*</Rerender>*/}
            {/*<Layout/>*/}
            <Resizing/>
            {/*<AddColorForm/>*/}
            {/*<ColorList/>*/}
        </div>
    )
}

export default App;
