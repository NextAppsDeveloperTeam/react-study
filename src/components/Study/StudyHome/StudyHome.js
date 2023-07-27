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
        <div className='study-block'>
          <StudyBasic />
        </div>
      )}
      {studyTab === 'state' && (
        <div className='study-block'>
          <StudyState />
        </div>
      )}
      {studyTab === 'callback' && (
        <div className='study-block'>
          <StudyCallback />
        </div>
      )}
      {studyTab === 'props' && (
        <div className='study-block'>
          <StudyProps />
        </div>
      )}
      {studyTab === 'effect' && (
        <div className='study-block'>
          <StudyEffect />
        </div>
      )}
      {studyTab === 'memo' && (
        <div className='study-block'>
          <StudyMemo />
        </div>
      )}
      {studyTab === 'ref' && (
        <div className='study-block'>
          <StudyRef />
        </div>
      )}
    </div>
  );
};

export default StudyHome;
