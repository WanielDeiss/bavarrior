import { first } from 'lodash';
// Node Packages
import React, { Component } from 'react';

// Data
import Adjectives from '../data/adjectives';
import Nouns from '../data/nouns';

const randomNumber = (num) => Math.floor(Math.random() * Math.floor(num));
const getGenderSuffix = (gender, adjEnding) => {
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

const getRandomNoun = () => {
  const randomNounNumber = randomNumber(Nouns.length);
  return Nouns[randomNounNumber];
};

const getRandomAdjective = () => {
  const randomAdjectiveNumber = randomNumber(Adjectives.length);
  return Adjectives[randomAdjectiveNumber];
};

const GetWords = () => {
  const noun = getRandomNoun();
  const firstRandomAdjective = getRandomAdjective();
  const firstAdjectiveEnding = firstRandomAdjective.slice(-1);
  const firstGenderSuffix = getGenderSuffix(noun.gender, firstAdjectiveEnding);
  const firstAdjective = firstRandomAdjective + firstGenderSuffix;
  const secondRandomAdjective = getRandomAdjective();
  const secondAdjectiveEnding = secondRandomAdjective.slice(-1);
  const secondGenderSuffix = getGenderSuffix(
    noun.gender,
    secondAdjectiveEnding
  );
  const secondAdjective = secondRandomAdjective + secondGenderSuffix;

  return `Du ${firstAdjective} ${noun.word}, ${secondAdjective}!`;
};

const RandomWords = () => {
  return (
    <div className="RandomWords">
      <h1>
        <GetWords />
      </h1>
    </div>
  );
};

export default RandomWords;
