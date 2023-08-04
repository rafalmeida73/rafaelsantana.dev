'use client';

import { useEffect, useState } from 'react';

import StarBorderIcon from '@mui/icons-material/StarBorder';

import GALink from '../GALink';
import IconFork from '../IconFork';
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
        <GALink
          href="https://github.com/rafalmeida73/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Portfolio GitHub"
          gaText="Portfolio GitHub"
        >
          <div>
            {githubInfo?.stars !== 0 && (
              <span>
                <StarBorderIcon
                  style={{
                    color: 'var(--primary)',
                    fontSize: '1.5rem',
                  }}
                />
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
        </GALink>
      </div>
    );
};

export default GithubInfo;
