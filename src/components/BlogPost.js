import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

const BlogPost = ({ postData }) => {
  // console.log(postData);
  return (
    <div>
      <Img
        style={{height: '35vh'}}
        sizes={postData.coverImage.sizes}
      />
      <h2>{postData.title}</h2>
      <Link to={postData.slug}>Read More</Link>
    </div>
  );
};

export default BlogPost;