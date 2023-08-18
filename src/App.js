import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import MainWatch from "./pages/MainWatch";
import WatchPage from "./pages/WatchPage";
import Sign from "./pages/Sign";
import HistoryPage from "./pages/HistoryPage";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                {/*<Route Component={MainPage} path="/"/>*/}
                <Route Component={MainWatch} path="/"/>
                <Route Component={WatchPage} path="/watch/anime/:id/ep/:episode/s/:season"/>
                <Route Component={Sign} path="/auth/:method"/>
                <Route Component={HistoryPage} path="/history"/>
            </Routes>
        </Router>
    </div>
  );
}

export default App