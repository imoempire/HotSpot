import './App.css';
import Featured from './Featured/Featured';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Featured/>
    </div>
  );
}

export default App;
