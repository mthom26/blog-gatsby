import React from 'react';
import Container from '../components/Container';

import styles from './about.module.css';

const About = (props) => {
  return (
    <div style={props.transition && props.transition.style}>
      <Container>
        <h1>Hello!</h1>
        <p>This is a simple blog site built using <a className={styles.link} href="https://www.gatsbyjs.org/">Gatsby</a>. The content is stored on <a className={styles.link} href="https://www.contentful.com/">Contentful</a> and the site is hosted on <a className={styles.link} href="https://www.netlify.com/">Netlify</a>. The source code can be found on <a className={styles.link} href="https://github.com/mthom26/blog-gatsby">Github</a>.</p>

        <p>Main header photo from <a className={styles.link} href="https://unsplash.com/photos/B3l0g6HLxr8">Unsplash</a>.</p>
      </Container>
    </div>
  );
};

export default About;