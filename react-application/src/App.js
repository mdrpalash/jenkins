import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to My React Demo!</h1>
        <p>This is a simple React application made by MD. Rashaduzzaman Thank you.</p>
        <button
          className="App-button"
          onClick={() => alert('Hello, DEVOPS BATCH-2 , Thank you')}
        >
          Click me
        </button>
      </header>
    </div>
  );
}

export default App;

