import React from 'react';
import Img from 'gatsby-image';

import Container from '../components/Container';

const BlogPost = ({ data }) => {
  console.log(data);

  return (
    <div>
      <Img
        style={{minHeight: '40vh'}}
        sizes={data.contentfulBlogPost.coverImage.sizes}  
      />
      <Container>
        <h2>{data.contentfulBlogPost.title}</h2>
        <p>{data.contentfulBlogPost.createdAt}</p>
        <p>{data.contentfulBlogPost.body.body}</p>
      </Container>
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
      coverImage {
        sizes(maxWidth: 1920) {
          srcSet
        }
      }
    }
  }
`;

export default BlogPost;