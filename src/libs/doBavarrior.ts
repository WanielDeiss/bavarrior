import { Noun } from '../data/nouns';
import getGenderSuffix from './getGenderSuffix';
import getRandomAdjective from './getRandomAdjective';
import getRandomNoun from './getRandomNoun';

export default (): string => {
  const randomFirstAdjective: string = getRandomAdjective();
  const randomLastAdjective: string = getRandomAdjective();
  const randomNoun: Noun = getRandomNoun();
  const fristAdjectiveSuffix: string = getGenderSuffix(
    randomNoun.gender,
    randomFirstAdjective.slice(-1)
  );
  const lastAdjectiveSuffix: string = getGenderSuffix(
    randomNoun.gender,
    randomLastAdjective.slice(-1)
  );
  return `Du ${randomFirstAdjective + fristAdjectiveSuffix} ${
    randomNoun.word
  }, ${randomLastAdjective + lastAdjectiveSuffix}!`;
};
