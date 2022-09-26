import './App.scss';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Search/>
    </div>
  );
}

export default App;
