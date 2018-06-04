import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import styles from './BlogPost.module.css';

const BlogPost = ({ postData }) => {
  // console.log(postData);
  return (
    <div className={styles.test}>
    <Link to={postData.slug}>
      <div className={styles.blogpost}>
        <div className={styles.imageContainer}>
          <h2 className={styles.title}>{postData.title}</h2>
          <Img
            style={{height: '35vh'}}
            sizes={postData.coverImage.sizes}
          />
        </div>
          
        <div className={styles.content}>
          <span className={styles.date}>{postData.date}</span>
          <p>{postData.excerpt.excerpt}</p>
        </div>
      </div>
    </Link>
    </div>
  );
};

export default BlogPost;