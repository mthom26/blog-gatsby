import React from 'react';

const BlogPost = ({ data }) => {
  console.log(data);

  return (
    <div>
      <h2>{data.contentfulBlogPost.title}</h2>
      <p>{data.contentfulBlogPost.createdAt}</p>
      <p>{data.contentfulBlogPost.body.body}</p>
    </div>
  );
};


export const query = graphql`
  query BlogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      createdAt
      body {
        body
      }
    }
  }
`;

export default BlogPost;