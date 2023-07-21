import './App.css';
import MainScreen from "./components/mainScreen";
import Trending from "./components/Trending";
import Plans from "./components/Plans";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
        <Header/>
      <MainScreen/>
        <Trending/>
        <Plans/>
      <Footer/>
    </div>
  );
}

export default App;
