import logo from "./logo.svg";
import "./App.css";
// import Hello from './Hello';
import Hell from "./Hell";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Register from "./components/Register";
import Api from "./components/Api";
import Stopwatch from "./components/Stopwatch";

function App() {
  return (
    <div className="App">
      {/* <Hello /> */}
      <Router>
      <Navbar />
        <Routes>
     

      <Route path="/todo" element={ <Hell />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/crud" element={<Api />} />
          <Route path="/stopwatch" element={ <Stopwatch />} />

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
