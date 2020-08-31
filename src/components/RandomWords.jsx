// Node Packages
import React, { Component } from 'react';

// Data
import Adjectives from '../data/adjectives';
import Nouns from '../data/nouns';

const RandomNumber = num => Math.floor((Math.random() * Math.floor(num)));
const GetGenderSuffix = (gender, adjEnding) => {

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

const GetWords = () => {
  const RAN_NOUN = RandomNumber(Nouns.length);
  const RAN_ADJECTIVE = RandomNumber(Adjectives.length);
  const RAN_ADJECTIVE_2 = RandomNumber(Adjectives.length);

  const NOUN = Nouns[RAN_NOUN];

  const RAN_ADJ_ORG = Adjectives[RAN_ADJECTIVE];
  const ADJECTIVE = RAN_ADJ_ORG + GetGenderSuffix(NOUN.gender, RAN_ADJ_ORG.slice(-1));

  const RAN_ADJ2_ORG = Adjectives[RAN_ADJECTIVE_2];
  const ADJECTIVE_2 = RAN_ADJ2_ORG + GetGenderSuffix(NOUN.gender, RAN_ADJ2_ORG.slice(-1));

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
