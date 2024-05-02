import logo from './logo.svg';
import './App.css';
import TextEditor from './components/TextEditor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>hello</h1>
        <p1>sleep</p1>
        <button>hi</button>
        <TextEditor></TextEditor>
      </header>
    </div>
  );
}

export default App;
