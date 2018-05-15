import React from 'react';

const Blog = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.allContentfulBlogPost.edges.map(({ node }) => {
        return (
          <div>
            <h2>{node.title}</h2>
            <span>{node.createdAt}</span>
            <p>{node.body.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export const query = graphql`
  query BlogQuery {
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
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