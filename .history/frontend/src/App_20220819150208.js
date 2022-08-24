import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/how-it-works">How it Works</Link>
      </nav>
    </div>
  );
}

export default App;
