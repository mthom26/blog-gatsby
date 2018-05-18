import React from 'react';
import Img from 'gatsby-image';
import Container from '../components/Container';

import './index.css';

const Index = ({ data }) => {
  
  return (
    <div>
      <Img
        style={{maxHeight: '55vh'}}
        sizes={data.bgImage.childImageSharp.sizes}
      />
      <Container>
        <h1>Index Page</h1>
      </Container>
    </div>
  );
};

export const query = graphql`
  query indexQuery {
    bgImage: file(relativePath: { eq: "images/mainbg.png" }) {
      childImageSharp {
        sizes(maxWidth: 1920) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;

export default Index;
