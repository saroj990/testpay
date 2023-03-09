import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="exp://192.168.29.106:19000"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redirect to App expo
        </a>
      </header>
    </div>
  );
}

export default App;
