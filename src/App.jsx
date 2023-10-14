import './App.css';
import CarHomePage from './Component/CarHomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CarHomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
