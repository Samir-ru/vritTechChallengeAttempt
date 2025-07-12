import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import Navbar from "./Navbar";

function App() {
  return (
      <Router>
      <AllRoutes/>
      <Navbar/>
      </Router>
  );
}

export default App;
