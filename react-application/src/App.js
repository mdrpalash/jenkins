import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to My React Demo!</h1>
        <p>This is a simple React application.</p>
        <button
          className="App-button"
          onClick={() => alert('Hello, world!')}
        >
          Click me
        </button>
      </header>
    </div>
  );
}

export default App;

