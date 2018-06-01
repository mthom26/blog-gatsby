import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import styles from './BlogPostLink.module.css';

const BlogPostLink = ({ data }) => {
  console.log(data);
  return (
    <Link className={styles.blogPostLink} to={data.slug}>
      <div className={styles.blogPostLinkContainer}>
        <Img
          style={{minHeight: '30vh'}}
          sizes={data.coverImage.sizes}  
        />
        {data.title}
      </div>
    </Link>
  );
};

export default BlogPostLink;