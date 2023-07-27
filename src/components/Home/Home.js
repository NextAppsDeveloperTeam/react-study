import './Home.scss';
import { TestIncDec, TestIncDecProps, TestInput } from '../Test';

const Home = () => {
  return (
    <div className='Home'>
      <h1>Home</h1>
      <div className='test-block'>
        <TestIncDec />
      </div>
      <div className='test-block'>
        <TestIncDecProps />
      </div>
      <div className='test-block'>
        <TestInput />
      </div>
    </div>
  );
};

export default Home;
