
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Details from './Details';
import Favourites from './Favourites';

function App() {
  return (
    <div className="min-h-screen p-6 bg-white text-gray-800">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recipie-det/:id' element={<Details/>}/>
        <Route path='/Favourites' element={<Favourites/>}/>
      </Routes>



    </div>
  );
}

export default App;
