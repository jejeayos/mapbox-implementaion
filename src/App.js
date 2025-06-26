import Banner from './components/Banner';
import Map from './components/Map';
import Footer from './components/Footer';
import './main.css';

function App() {
  return (
    <div className="App">
      <div className='map-region'>
        <Map/>
      </div>
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
