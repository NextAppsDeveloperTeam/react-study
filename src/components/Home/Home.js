import './Home.scss';
import { TestIncDec, TestIncDecProps, TestInput, TestEffect, TestMemo } from '../Test';

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
      <div className='test-block'>
        <TestEffect />
      </div>
      <div className='test-block'>
        <TestMemo />
      </div>
    </div>
  );
};

export default Home;
