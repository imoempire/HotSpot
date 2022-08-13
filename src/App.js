import './App.css';
import Featured from './Featured/Featured';
import Header from './Header/Header';
import MapView from './Map/MapView';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Featured/>
      <MapView/>
    </div>
  );
}

export default App;
