// Node Packages
import React, { Component } from 'react';

// Data
import Adjectives from '../data/adjectives';
import Nouns from '../data/nouns';

const RandomNumber = num => Math.floor((Math.random() * Math.floor(num)));
const GetGenderSuffix = gender => {
  switch (gender) {
    case 'mas':
      return 'er';
    case 'fem':
      return 'e';
    default:
      return 's';
  }
};

const GetWords = () => {
  const RAN_NOUN = RandomNumber(Nouns.length);
  const RAN_ADJECTIVE = RandomNumber(Adjectives.length);
  const RAN_ADJECTIVE_2 = RandomNumber(Adjectives.length);

  const NOUN = Nouns[RAN_NOUN];
  const ADJECTIVE = Adjectives[RAN_ADJECTIVE] + GetGenderSuffix(NOUN.gender);
  const ADJECTIVE_2 = Adjectives[RAN_ADJECTIVE_2] + GetGenderSuffix(NOUN.gender);

  return `Du ${ADJECTIVE} ${NOUN.word}, ${ADJECTIVE_2}!`;
};

const RandomWords = () => {
  return (
    <div className="RandomWords">
      <h1><GetWords /></h1>
    </div>
  );
};

export default RandomWords;