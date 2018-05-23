import React from 'react';
import Container from '../components/Container';

const About = (props) => {
  return (
    <div style={props.transition && props.transition.style}>
      <Container>
        <h1>About Page</h1>
      </Container>
    </div>
  );
};

export default About;