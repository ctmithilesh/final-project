import './App.css';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from './Pages/DashboardPage';
import CoursesPage from './Pages/CoursesPage';
import InstructorsPage from './Pages/InstructorsPage';
import ViewInstructorPage from './Pages/ViewInstructorPage';
import StudentsPage from './Pages/StudentsPage';
import SeminarsPage from './Pages/SeminarsPage';
import VideoLibrary from './Components/VideoLibrary';
import VideoLibraryPage from './Pages/VideoLibraryPage';
import ForumPage from './Pages/ForumPage';
import ForumThread from './Components/ForumThread';
import ForumThreadPage from './Pages/ForumThreadPage';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<DashboardPage />} />
      <Route exact path='/courses' element={<CoursesPage />} />
      <Route exact path='/instructors' element={<InstructorsPage />} />
      <Route exact path='/view-instructor' element={<ViewInstructorPage />} />
      <Route exact path='/students' element={<StudentsPage />} />
      <Route exact path='/seminars' element={<SeminarsPage />} />
      <Route exact path='/video-library' element={<VideoLibraryPage />} />
      <Route exact path='/forum' element={<ForumPage />} />
      <Route exact path='/forum-thread' element={<ForumThreadPage />} />
    </Routes>
  );
}

export default App;
