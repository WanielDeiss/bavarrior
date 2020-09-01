import nouns, { Noun } from '../data/nouns';
import randomNumber from './randomNumber';

export default (): Noun => {
  const randomNounNumber = randomNumber(nouns.length);
  return nouns[randomNounNumber];
};
