'use client';

import { useEffect, useState } from 'react';

import { Star } from 'lucide-react';

import IconFork from '../IconFork';
import Links from '../Links';
import styles from './GithubInfo.module.css';
import { GithubInfoProps } from './types';

export const GithubInfo = () => {
  const [githubInfo, setGitHubInfo] = useState<GithubInfoProps>();

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    fetch('https://api.github.com/repos/rafalmeida73/portfolio')
      .then(response => response.json())
      .then(json => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      // eslint-disable-next-line no-console
      .catch(e => console.error(e));
  }, []);

  if (githubInfo?.stars || githubInfo?.forks)
    return (
      <div className={styles.container}>
        <Links
          href="https://github.com/rafalmeida73/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Portfolio GitHub"
        >
          <div>
            {githubInfo?.stars !== 0 && (
              <span>
                <Star size={20} />
                <p>{githubInfo?.stars}</p>
              </span>
            )}
            {githubInfo?.forks !== 0 && (
              <span>
                <IconFork />
                <p>{githubInfo?.forks}</p>
              </span>
            )}
          </div>
        </Links>
      </div>
    );
};

export default GithubInfo;
