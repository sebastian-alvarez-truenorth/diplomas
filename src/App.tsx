import { RecoilRoot, atom } from 'recoil';

import DiplomaContainer from './components/diploma-container';
import NameEntry from './components/name-entry';
import CharCount from './components/char-count';

import './App.css';

export const maxCharCountAtom = atom({
  key: 'maxCharCountAtom',
  default: 100
});

const App = () => (
  <RecoilRoot>
    <main className="App">
      <DiplomaContainer />
      <NameEntry />
      <CharCount />
    </main>
  </RecoilRoot>
);

export default App;
