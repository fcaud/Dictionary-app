import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <div>
          <Search />
        </div>
        <footer>
          <a href="https://github.com/fcaud/Dictionary-app">
            coded by Freya Caudwell
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
