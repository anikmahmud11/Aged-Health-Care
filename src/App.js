import './App.css';
import Banner from './Pages/Home/Banner/Banner';
import Navigationbar from './Pages/Home/Nav Bar/Navigationbar';
import Services from './Pages/Home/Services/Services';

function App() {
  return (
    <div className="text-center">
     <Navigationbar></Navigationbar>
     <Banner></Banner>
     <Services></Services>
    </div>
  );
}

export default App;
