import './App.css';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from './Pages/DashboardPage';
import CoursesPage from './Pages/CoursesPage';
import InstructorsPage from './Pages/InstructorsPage';
import ViewInstructorPage from './Pages/ViewInstructorPage';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<DashboardPage />} />
      <Route exact path='/courses' element={<CoursesPage />} />
      <Route exact path='/instructors' element={<InstructorsPage />} />
      <Route exact path='/view-instructor' element={<ViewInstructorPage />} />
    </Routes>
  );
}

export default App;
