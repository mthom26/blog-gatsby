import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import Container from '../components/Container';

const BlogPost = ({ data, pathContext, location }) => {
  // console.log(data);
  // console.log(pathContext);
  // console.log(location);
  const { prev, next } = pathContext;

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
        <hr/>
        <div>
          {prev && <Link to={prev.slug}>Previous Post</Link>}
          {next && <Link to={next.slug}>Next Post</Link>}
        </div>
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