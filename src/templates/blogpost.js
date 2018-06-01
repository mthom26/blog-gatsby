import React from 'react';
import ReactDOM from 'react-dom';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import Container from '../components/Container';
import BlogPostLink from '../components/BlogPostLink';
import styles from './blogpost.module.css';

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { prev, next, prevSlug, nextSlug } = this.props.pathContext;
    //console.log(prevSlug);
    const { data, location, transition } = this.props;
    const { current, nextData, prevData } = data;
    
    return (
      <div
        style={transition && transition.style}
      >
        <Img
          style={{minHeight: '40vh'}}
          sizes={current.coverImage.sizes}  
        />
        <Container>
          <h2>{current.title}</h2>
          <p>{current.createdAt}</p>
          <p>{current.body.body}</p>
          <hr/>
        </Container>
        <div className={styles.links}>
          {prev && <BlogPostLink data={prevData}/>}
          {next && <BlogPostLink data={nextData}/>}
        </div>
        {/*
        <div className={styles.links}>
          {prev && <Link to={prev.slug}>Previous Post</Link>}
          {next && <Link to={next.slug}>Next Post</Link>}
        </div>
        */}
      </div>
    );
  } 
}


export const query = graphql`
  query BlogPostQuery($slug: String!, $nextSlug: String, $prevSlug: String) {
    current: contentfulBlogPost(slug: { eq: $slug }) {
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

    nextData: contentfulBlogPost(slug: { eq: $nextSlug }) {
      title
      createdAt
      slug
      body {
        body
      }
      coverImage {
        sizes(maxWidth: 1920) {
          srcSet
        }
      }
    }

    prevData: contentfulBlogPost(slug: { eq: $prevSlug }) {
      title
      createdAt
      slug
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