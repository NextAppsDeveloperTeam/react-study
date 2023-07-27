import './StudyHome.scss';
import StudyBasic from './StudyBasic';
import StudyState from './StudyState';
import StudyCallback from './StudyCallback';
import StudyProps from './StudyProps';
import StudyEffect from './StudyEffect';
import StudyMemo from './StudyMemo';
import StudyRef from './StudyRef';

const StudyHome = () => {
  const [studyTab, setStudyTab] = useState('basic');

  return (
    <div className='StudyHome'>
      <h1>Study</h1>
      <div className='tab-buttons'>
        <button onClick={() => setStudyTab('basic')}>basic</button>
        <button onClick={() => setStudyTab('state')}>state</button>
        <button onClick={() => setStudyTab('callback')}>callback</button>
        <button onClick={() => setStudyTab('effect')}>effect</button>
        <button onClick={() => setStudyTab('memo')}>memo</button>
        <button onClick={() => setStudyTab('props')}>props</button>
        <button onClick={() => setStudyTab('ref')}>ref</button>
      </div>
      <br />
      {studyTab === 'basic' && (
        <div className='test-block'>
          <StudyBasic />
        </div>
      )}
      {studyTab === 'state' && (
        <div className='test-block'>
          <StudyState />
        </div>
      )}
      {studyTab === 'callback' && (
        <div className='test-block'>
          <StudyCallback />
        </div>
      )}
      {studyTab === 'props' && (
        <div className='test-block'>
          <StudyProps />
        </div>
      )}
      {studyTab === 'effect' && (
        <div className='test-block'>
          <StudyEffect />
        </div>
      )}
      {studyTab === 'memo' && (
        <div className='test-block'>
          <StudyMemo />
        </div>
      )}
      {studyTab === 'ref' && (
        <div className='test-block'>
          <StudyRef />
        </div>
      )}
    </div>
  );
};

export default StudyHome;
