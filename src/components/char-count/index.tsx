import { useRecoilValue, selector } from 'recoil';

import { maxCharCountAtom } from '../../App';
import { nameEntryAtom } from '../name-entry';

import './styles.css';

const currentCharCountSelector = selector({
  key: 'currentCharCountSelector',
  get: ({ get }) => {
    const input = get(nameEntryAtom);
    return input.length;
  }
});

const labelColorSelector = selector({
  key: 'labelColorSelector',
  get: ({ get }) => {
    const length = get(currentCharCountSelector);
    let color = length >= 80 ? 'red' : 'black';

    return color;
  }
});


const CharCount = () => {
  const charCount = useRecoilValue(currentCharCountSelector);
  const maxCharCount = useRecoilValue(maxCharCountAtom);

  const labelColor = useRecoilValue(labelColorSelector);
  console.log(labelColor);

  return (
    <div className="CharCountContainer">
      <p className="CharCount">{ charCount } / { maxCharCount }</p>
    </div>
  );
};

export default CharCount;