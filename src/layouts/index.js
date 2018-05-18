import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeaderImage from '../components/HeaderImage';

const Layout = ({ children, data, location }) => {

  return (
    <div>
      <Header />
      <HeaderImage data={data} location={location}/>
      {children()}
      <Footer />
    </div>
  );
};

export const query = graphql`
  query layoutQuery {
    bgImage: file(relativePath: { eq: "images/indexbg.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1920) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;

export default Layout;