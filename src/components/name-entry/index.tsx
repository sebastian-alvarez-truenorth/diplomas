import { atom, useRecoilState } from "recoil";

import './styles.css';

export const nameEntryAtom = atom({
  key: 'nameEntryAtom',
  default: ''
});

const NameEntry = () => {
  const [name, setName] = useRecoilState(nameEntryAtom);

  return (
    <div className="NameEntry">
      <input className="NameEntryInput" type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default NameEntry;