import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddOrder from './pages/AddOrder';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddOrder />} />
    </Routes>
  );
}

export default App;
