import React from 'react';
import Link from 'gatsby-link';

const BlogPost = ({ postData }) => {
  console.log(postData);
  return (
    <div>
      <h2>BlogPost Listing</h2>
      <Link to={postData.slug}>Read More</Link>
    </div>
  );
};

export default BlogPost;