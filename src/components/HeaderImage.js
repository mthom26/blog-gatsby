import React from 'react';
import ReactDOM from 'react-dom';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import styles from './HeaderImage.module.css';

class HeaderImage extends React.Component {
  constructor(props) {
    super(props);
  }
  
  returnContent(pathname) {
    //console.log(pathname);
    if(pathname === '/') {
      return (
        <div className={`${styles.headerImageContent}`}>
          <h1 className={styles.centered}>Welcome!</h1>
          <h2 className={styles.centered}>This is a test blog built using Gatsby.</h2>
          <Link to="/blog">View Blogposts</Link>
        </div>
      );
    } else if(pathname === '/blog') {
      return (
        <div className={`${styles.headerImageContentBlog}`}>
          <h2 className={styles.centered}>Blog Section</h2>
        </div>
      );
    }
    else if(pathname === '/about') {
      return (
        <div className={`${styles.headerImageContentAbout}`}>
          <h2 className={styles.centered}>About Section</h2>
        </div>
      );
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    // Header Image component should adjust height based on the current path
    const { pathname } = this.props.location;
    const prevpathname = prevProps.location.pathname;
    let newHeight = '0';
    let oldHeight = '0';
    
    // set the new and old height based on the old and new locations
    if(pathname === '/') {
      newHeight = '100vh';
    } else if(pathname === '/blog' || pathname === '/about') {
      newHeight = '40vh';
    }
    if(prevpathname === '/') {
      oldHeight = '100vh';
    } else if(prevpathname === '/blog' || prevpathname === '/about') {
      oldHeight = '40vh';
    }

    // animate from the old height to the new height
    if(newHeight !== oldHeight) {
      this.wrapper.animate([
        { height: oldHeight },
        { height: newHeight } 
      ], {
        duration: 350,
        fill: 'forwards',
        easing: 'ease-in-out',
        iterations: 1
      });
    }

    // To get an animation on the way out also may need to simply render all 
    // three tpes of content (home, blog, about) on top of each other and just 
    // change the opacity values for each one.
    this.content.animate([
      { opacity: 0 },
      { opacity: 1 }
    ], {
      duration: 800,
      fill: 'forwards',
      easing: 'ease-in-out',
      iterations: 1
    })
  }

  render() {
    const { location, data } = this.props;
    const { pathname } = location;

    const content = this.returnContent(pathname);

    let headerHeight = styles.zeroHeight;

    if(pathname === '/') {
      headerHeight = styles.largeHeight;
    } else if (pathname === '/blog' || pathname === '/about') {
      headerHeight = styles.smallHeight;
    }

    return (
      <div
        ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)}
        className={`${styles.headerWrapper} ${headerHeight}`}
      >
        <div className={styles.outer}>
          <div
            ref={(content) => this.content = ReactDOM.findDOMNode(content)}
            className={styles.inner}
          >
            {content}
          </div>
        </div>
        
        <Img
          outerWrapperClassName={styles.outerWrapperClassName}
          style={{height: '100%'}}
          sizes={data.bgImage.childImageSharp.sizes}
        />
      </div>
    );
  }
  
};

export default HeaderImage;