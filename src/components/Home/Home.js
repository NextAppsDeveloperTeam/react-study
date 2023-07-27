import './Home.scss';
import { TestBasic, TestState, TestProps, TestRef, TestEffect, TestMemo, TestCallback } from '../Test';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  // Use ---------------------------------------------------------------------------------------------------------------

  const navigate = useNavigate();

  // State -------------------------------------------------------------------------------------------------------------

  const [testTab, setTestTab] = useState('basic');

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
      <div className='test-block-container'>
        <div className='tab-buttons'>
          <button onClick={() => setTestTab('basic')}>basic</button>
          <button onClick={() => setTestTab('state')}>state</button>
          <button onClick={() => setTestTab('callback')}>callback</button>
          <button onClick={() => setTestTab('effect')}>effect</button>
          <button onClick={() => setTestTab('memo')}>memo</button>
          <button onClick={() => setTestTab('props')}>props</button>
          <button onClick={() => setTestTab('ref')}>ref</button>
        </div>
        <br />
        {testTab === 'basic' && (
          <div className='test-block'>
            <TestBasic />
          </div>
        )}
        {testTab === 'state' && (
          <div className='test-block'>
            <TestState />
          </div>
        )}
        {testTab === 'callback' && (
          <div className='test-block'>
            <TestCallback />
          </div>
        )}
        {testTab === 'props' && (
          <div className='test-block'>
            <TestProps />
          </div>
        )}
        {testTab === 'effect' && (
          <div className='test-block'>
            <TestEffect />
          </div>
        )}
        {testTab === 'memo' && (
          <div className='test-block'>
            <TestMemo />
          </div>
        )}
        {testTab === 'ref' && (
          <div className='test-block'>
            <TestRef />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
