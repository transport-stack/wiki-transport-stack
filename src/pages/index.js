import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Welcome to Transport Stack</h1>
        <p className="hero__subtitle">Powering innovation and impact with Digital Public Infrastructure & Goods</p>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  const userTypes = [
    {
      label: 'Mobility Researchers & Urban Planners',
      description: 'Access data-driven insights and planning tools for sustainable urban mobility solutions',
      bg: '#E6F2FF'
    },
    {
      label: 'MaaS & Transport Application Developers',
      description: 'Build and integrate mobility solutions using standardized APIs and data models',
      bg: '#D9F3DB'
    },
    {
      label: 'Startups & Smart Mobility Enthusiasts',
      description: 'Innovate and create new mobility services using our open infrastructure',
      bg: '#FFFBC1'
    },
    {
      label: 'Individual Contributors',
      description: 'Collaborate and contribute to open-source mobility projects and standards',
      bg: '#FFE6E6'
    }
  ];

  const offerings = [
    {
      title: 'Data Models',
      description: 'Structured frameworks for organising transportation data',
      link: '/docs/models/otd',
      icon: '/img/icons/data-model.png'
    },
    {
      title: 'Use Cases',
      description: 'Set of solutions designed to enhance urban mobility',
      link: '/docs/use-cases/journey-planner',
      icon: '/img/icons/use-cases.png'
    },
    {
      title: 'Knowledge Hub',
      description: 'Central repository for open source urban mobility projects',
      link: '/docs/knowledge-hub',
      icon: '/img/icons/knowledge-hub.png'
    }
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Who can use Transport Stack?</h2>
        <div className={styles.userTypes}>
          {userTypes.map((type, index) => (
            <div
              key={index}
              className={styles.userCard}
              style={{ backgroundColor: type.bg }}
            >
              <strong>{type.label}</strong>
              <p>{type.description}</p>
            </div>
          ))}
        </div>

        <h2 className={styles.sectionTitle}>Our Offerings</h2>
        <div className={styles.offeringCards}>
          {offerings.map((offering, index) => (
            <OfferingCard key={index} {...offering} />
          ))}
        </div>

        <h2 className={`${styles.sectionTitle} ${styles.successTitle}`}>Success Stories</h2>
        <div className={styles.successStories}>
          <div className={styles.successStoryCard}>
            <img src="/img/icons/delhi-tstack.png" alt="Delhi Transport Stack" className={styles.storyIcon} />
            <div className={styles.storyContent}>
              <h3>Delhi Transport Stack</h3>
              <p>Delhi Transport Stack is a pioneering initiative that leverages digital public infrastructure to transform urban mobility, fostering innovation and collaboration through data interoperability and open innovation challenges, thereby enhancing commuter experiences and operational efficiency.</p>
              <a href="/docs/delhi-transport-stack" className={styles.readMore}>
                Read More →
              </a>
            </div>
          </div>
        </div>

        <div className={styles.reportsRibbon}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Featured Reports</h2>
            <div className={styles.reportsContainer}>
              <a href="https://dts-portal-assets.s3.ap-south-1.amazonaws.com/Transport+Stack+JICA+BCG.pdf" 
                 className={styles.reportCard}
                 target="_blank"
                 rel="noopener noreferrer">
                <div className={styles.reportIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 13H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 17H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 9H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.reportContent}>
                  <h3>Transport Stack</h3>
                  <p>Powering Innovation and Impact with Digital Public Infrastructure & Goods</p>
                  <span className={styles.downloadLink}>Download PDF →</span>
                </div>
              </a>

              <a href="https://web-assets.bcg.com/5e/df/500a7556487bba2882e713be7391/unified-data-highways.pdf" 
                 className={styles.reportCard}
                 target="_blank"
                 rel="noopener noreferrer">
                <div className={styles.reportIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 13H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 17H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 9H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.reportContent}>
                  <h3>Unified Data Highways</h3>
                  <p>The Next Frontier of Digital Public Infrastructure</p>
                  <span className={styles.downloadLink}>Download PDF →</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OfferingCard({ title, description, link, icon }) {
  return (
    <a href={link} className={styles.offeringCard}>
      <img src={icon} alt={title + ' icon'} className={styles.cardIcon} />
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
}

export default function Home() {
  return (
    <Layout
      description="Transport Stack - Digital Public Infrastructure for Urban Mobility">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
