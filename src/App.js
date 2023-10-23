import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from './Pages/DashboardPage';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
