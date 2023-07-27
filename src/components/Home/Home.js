import './Home.scss';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  // Use ---------------------------------------------------------------------------------------------------------------

  const navigate = useNavigate();

  // Render ------------------------------------------------------------------------------------------------------------

  return (
    <div className='Home'>
      <h1>Home</h1>
      <div>
        <button onClick={() => navigate('/study')}>Study</button>
        <button onClick={() => navigate('/todo')}>TODO</button>
      </div>
    </div>
  );
};

export default Home;
