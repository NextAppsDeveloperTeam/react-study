import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, StudyHome, TodoHome } from '../components';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/study' element={<StudyHome />} />
      <Route path='/todo' element={<TodoHome />} />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default Router;
