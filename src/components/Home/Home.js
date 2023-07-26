import { StyledContainer } from './Home.style';
import {TestIncDec} from "../Test";

const Home = () => {
  return (
    <StyledContainer>
      <div className='title'>Home</div>
      <br/>
      <div className='test-block'>
        <TestIncDec />
      </div>
    </StyledContainer>
  );
};

export default Home;
