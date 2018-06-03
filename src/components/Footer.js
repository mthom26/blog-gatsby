import React from 'react';

import GatsbyIcon from '../images/gatsbyIcon.svg';
import ContentfulIcon from '../images/contentfulIcon.svg';
import GithubIcon from '../images/githubIcon.svg';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.imageDiv}>
        <a href="https://www.gatsbyjs.org/" target="_blank">
          <img src={GatsbyIcon} alt="Gatsby" height="35px"/>
        </a>
      </div>
      <div className={styles.imageDiv}>
        <a href="https://www.contentful.com/" target="_blank">
          <img src={ContentfulIcon} alt="ContentfulIcon" height="35px"/>
        </a>
      </div>
      <div className={styles.imageDiv}>
        <a href="https://github.com/mthom26/blog-gatsby" target="_blank">
          <img src={GithubIcon} alt="GithubIcon" height="35px"/>
        </a>
      </div>
    </div>
  );
};

export default Footer;