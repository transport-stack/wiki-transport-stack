import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Wiki TransportStack</h1>
        <p className="hero__subtitle">Your one-stop transit data hub</p>
        <div className={styles.buttons}>
          <a
            className="button button--secondary button--lg"
            href="/docs/intro"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}


function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureRow}>
          <div className={styles.featureBlock}>
            <h3>Datasets</h3>
            <p>
              Explore our comprehensive datasets, including DMRC station and gate details, GTFS files, and OD flows.
            </p>
          </div>
          <div className={styles.featureBlock}>
            <h3>Validation Standards</h3>
            <p>
              Ensure high data quality with robust validation rules and templates for transit datasets.
            </p>
          </div>
          <div className={styles.featureBlock}>
            <h3>Developer Tools</h3>
            <p>
              Access resources and guides to integrate and manage transit data effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
