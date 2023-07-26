import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../components';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default Router;
