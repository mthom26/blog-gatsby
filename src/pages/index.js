import React from 'react';
import Img from 'gatsby-image';
import Container from '../components/Container';

import './index.css';

const Index = (props) => {
  
  return (
    <div style={props.transition && props.transition.style}>
      <Container>
        <h1>Index Page</h1>
      </Container>
    </div>
  );
};

export default Index;
