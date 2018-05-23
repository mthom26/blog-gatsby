import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeaderImage from '../components/HeaderImage';

/*
class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      transition: 'none'
    };
  }

  // determine the transition needed and pass it down to children

  // now need to figure out how to determine whether the child should 
  // slide from left or right, need to know where the next location is 
  // compared to the previous, a possible solution is enforce the slug
  // of each blogpost to be '01-blogposttitle', '02-blogposttitle', etc...

  // perhaps there is a better way (generate ordered id and attach it to
  // blogpost on page creation?)
  
  componentWillReceiveProps(nextProps) {
    const { pathname } = this.props.location;
    const nextpathname = nextProps.location.pathname;
    //console.log(pathname);
    //console.log(nextpathname);
    //console.log('--------------------');

    if(nextpathname !== '/' && nextpathname !== '/blog' && nextpathname !== '/about') {
      this.setState({transition: 'slide from right'});
    } else {
      this.setState({transition: 'none'});
    }
  }

  render() {
    const { children, data, location } = this.props;
    console.log(this.state.transition);
    return (
      <div>
        <Header />
        <HeaderImage data={data} location={location}/>
        {children({ ...this.props, transition: this.state.transition })}
        <Footer />
      </div>
    );
  } 
}
*/

const Layout = (props) => {
  //console.log(props);
  return (
    <div>
        <Header />
        {props.children()}
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