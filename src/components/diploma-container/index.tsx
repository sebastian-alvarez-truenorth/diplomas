import { useRecoilValue } from 'recoil';
import { nameEntryAtom } from '../name-entry';

import './styles.css';

const Content = () => {
  const nameEntry = useRecoilValue(nameEntryAtom);

  return (
    <div className="DiplomaContainerContent">
      <p style={{ fontSize: 'xx-large' }}>This diploma is issued to:</p>
      <p style={{ marginTop: '0.5rem' }}>{ nameEntry }</p>
    </div>
  );
}

const DiplomaContainer = () => (
  <div className="DiplomaContainer">
    <Content />
  </div>
);

export default DiplomaContainer;