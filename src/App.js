import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import HomePage from './pages/HomePage/HomePage';
import LocationsPage from './pages/LocationsPage/LocationsPage';


function App() {
  return (
    <BrowserRouter>

      <Header/>
      
      <Routes>
       <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharactersPage />} /> 
        <Route path="/locations" element={<LocationsPage />} /> 
      </Routes>
    </BrowserRouter>

  );
}

export default App;
