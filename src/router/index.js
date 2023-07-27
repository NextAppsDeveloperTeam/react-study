import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, TodoHome } from '../components';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/todo' element={<TodoHome />} />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default Router;
