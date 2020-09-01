import React from 'react';
import { HeartFill } from 'react-bootstrap-icons';
import githubContributors from './data/githubContributors';
import './Footer.css';

function Footer() {
  const contributorCount = githubContributors.length;
  return (
    <div id="footer" className="text-center">
      Gmacht mit <HeartFill /> in Bayern vom{' '}
      {githubContributors.map((contributor, index) => {
        return (
          <span>
            <a
              href={contributor.githubProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contributor.name}
            </a>
            {index < contributorCount - 1 ? ', ' : null}
          </span>
        );
      })}
    </div>
  );
}

export default Footer;
