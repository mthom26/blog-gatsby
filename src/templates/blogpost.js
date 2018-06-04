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
      <div className={styles.container}>
        <div
          style={transition && transition.style}
        >
          <Img
            style={{minHeight: '60vh'}}
            sizes={current.coverImage.sizes}  
          />
          <Container>
            <div className={styles.content}>
              <h2 className={styles.title}>{current.title}</h2>
              <span className={styles.date}>{current.date}</span>

              <div
              className={styles.contentHtml}
              dangerouslySetInnerHTML={{
                __html: current.body.childMarkdownRemark.html
              }} />
              <hr/>
            </div>
          </Container>
          <div className={styles.links}>
            {prev && <BlogPostLink text="Previous Post" data={prevData}/>}
            {next && <BlogPostLink text="Next Post" data={nextData}/>}
          </div>
        </div>
      </div>
    );
  } 
}


export const query = graphql`
  query BlogPostQuery($slug: String!, $nextSlug: String, $prevSlug: String) {
    current: contentfulBlogPost(slug: { eq: $slug }) {
      title
      date (formatString: "DD MMMM YYYY")
      body {
        childMarkdownRemark {
          html
        }
      }
      coverImage {
        sizes(maxWidth: 1920) {
          srcSet
        }
      }
    }

    nextData: contentfulBlogPost(slug: { eq: $nextSlug }) {
      title
      date
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
      date
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