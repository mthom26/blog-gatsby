import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import styles from './BlogPostLink.module.css';

const BlogPostLink = ({ data, text }) => {
  //console.log(data);
  return (
    <Link className={styles.blogPostLink} to={data.slug}>
      <div className={styles.blogPostLinkContainer}>
        <div className={styles.content}>
          <h3>{text}</h3>
          <h4>{data.title}</h4>
        </div>
        <Img
          style={{minHeight: '30vh'}}
          sizes={data.coverImage.sizes}  
        />
      </div>
    </Link>
  );
};

export default BlogPostLink;