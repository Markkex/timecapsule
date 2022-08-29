import "./App.css";
import { Link } from "react-router-dom";

import Menu from "./components/Menu";
import Initial from "./pages/Initial";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/how-it-works">How it Works</Link>
      </nav>
      <Menu />
      <Initial />
    </div>
  );
}

export default App;
