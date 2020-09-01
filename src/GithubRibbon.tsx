import React, { Component } from 'react';

const GithubRibbon = () => {
  const ghUser = 'WanielDeiss';
  const gbRepo = 'bavarrior';

  return (
    <a href={`https://github.com/${ghUser}/${gbRepo}`}>
      <img
        style={{ position: 'absolute', top: 0, right: 0, border: 0 }}
        src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png"
        alt="Fork me on GitHub"
      />
    </a>
  );
};

export default GithubRibbon;
