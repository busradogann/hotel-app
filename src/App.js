import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Hotels from './pages/Hotels';
import AddHotel from './pages/AddHotel';  
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Hotels />} />
          <Route path="/add-hotel" element={<AddHotel />}>ekle</Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
