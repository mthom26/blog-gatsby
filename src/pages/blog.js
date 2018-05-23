import React from 'react';

import Container from '../components/Container';
import BlogPost from '../components/BlogPost';

const Blog = (props) => {
  // console.log(data);
  const { data, transition } = props;
  return (
    <div style={props.transition&& props.transition.style}>
      <Container>
        {data.allContentfulBlogPost.edges.map(({ node }) => {
          return <BlogPost key={node.id} postData={node}/>
        })}
      </Container>
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
          id
          coverImage {
            sizes(maxWidth: 1000) {
              srcSet
            }
          }
          body {
            body
          }
          excerpt {
            excerpt
          }
          createdAt(formatString: "DD-MM-YYYY")
        }
      }
    }
  }
`;

export default Blog;