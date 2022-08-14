import Add from './AddPlace/Add';
import './App.css';
import Featured from './Featured/Featured';
import Footer from './Footer/Footer';
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
      <Add/>
      <Footer/>
    </div>
  );
}

export default App;
