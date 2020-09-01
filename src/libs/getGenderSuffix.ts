import { Noun } from '../data/nouns';

export default (gender: Noun['gender'], adjEnding: string) => {
  const prefix = adjEnding == 'a' ? 'n' : '';
  switch (gender) {
    case 'mas':
      return `${prefix}er`;
    case 'fem':
      return `${prefix}e`;
    default:
      return `${prefix}s`;
  }
};
