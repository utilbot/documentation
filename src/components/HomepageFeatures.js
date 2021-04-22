import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'No lags',
    description: (
      <>
        We ensure, that there will always be enough capacity for every Guild, so everyone can use the Bot without any issues.
      </>
    ),
  },
  {
    title: 'Stable',
    description: (
      <>
        The bot has an (average) uptime of 99.5%.
      </>
    ),
  },
  {
    title: 'Feature rich',
    description: (
      <>
        The bot has many functionalities. A full list, of what the bot can do is available in this Documentation.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
