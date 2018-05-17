import React from 'react';

import Container from '../components/Container';
import BlogPost from '../components/BlogPost';

const Blog = ({ data }) => {
  // console.log(data);
  return (
    <Container>
      {data.allContentfulBlogPost.edges.map(({ node }) => {
        return <BlogPost key={node.id} postData={node}/>
      })}
    </Container>
  );
};

export const query = graphql`
  query BlogQuery {
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
          id
          coverImage {
            sizes(maxWidth: 1000) {
              srcSet
            }
          }
          body {
            body
          }
          createdAt
        }
      }
    }
  }
`;

export default Blog;