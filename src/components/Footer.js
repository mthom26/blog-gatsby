import React from 'react';

import GatsbyIcon from '../images/gatsbyIcon.svg';
import ContentfulIcon from '../images/contentfulIcon.svg';
import GithubIcon from '../images/githubIcon.svg';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.imageDiv}>
        <img src={GatsbyIcon} alt="Gatsby" height="35px"/>
      </div>
      <div className={styles.imageDiv}>
        <img src={ContentfulIcon} alt="ContentfulIcon" height="35px"/>
      </div>
      <div className={styles.imageDiv}>
        <img src={GithubIcon} alt="GithubIcon" height="35px"/>
      </div>
    </div>
  );
};

export default Footer;