import './Home.scss';
import { TestIncDec, TestIncDecProps, TestInput, TestEffect, TestMemo, TestCallback } from '../Test';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  // Use ---------------------------------------------------------------------------------------------------------------

  const navigate = useNavigate();

  // Event Handler -----------------------------------------------------------------------------------------------------

  const handleGoTodoClick = useCallback(() => {
    navigate('/todo');
  }, [navigate]);

  // Render ------------------------------------------------------------------------------------------------------------

  return (
    <div className='Home'>
      <h1>Home</h1>
      <div>
        <button onClick={handleGoTodoClick}>TODO 로 이동</button>
      </div>
      <br />
      <div className='test-block'>
        <TestIncDec />
      </div>
      <div className='test-block'>
        <TestCallback />
      </div>
      <div className='test-block'>
        <TestIncDecProps />
      </div>
      <div className='test-block'>
        <TestEffect />
      </div>
      <div className='test-block'>
        <TestMemo />
      </div>
      <div className='test-block'>
        <TestInput />
      </div>
    </div>
  );
};

export default Home;
