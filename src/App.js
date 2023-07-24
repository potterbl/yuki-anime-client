import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import MainWatch from "./pages/MainWatch";
import WatchPage from "./pages/WatchPage";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route Component={MainPage} path="/"/>
                <Route Component={MainWatch} path="/watch"/>
                <Route Component={WatchPage} path="/watch/anime"/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
