import adjectives from '../data/adjectives';
import randomNumber from './randomNumber';

export default (): string => {
  const randomAdjectiveNumber = randomNumber(adjectives.length);
  return adjectives[randomAdjectiveNumber];
};
