import './Home.scss';
import { TestIncDec } from '../Test';

const Home = () => {
  return (
    <div className='Home'>
      <h1>Home</h1>
      <div className='test-block'>
        <TestIncDec />
      </div>
    </div>
  );
};

export default Home;
