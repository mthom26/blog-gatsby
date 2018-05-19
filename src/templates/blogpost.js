import React from 'react';
import ReactDOM from 'react-dom';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import Container from '../components/Container';

// The blogpost should animate in from the right
// TODO - figure out how to animate in different directions after pressing
// next or previous blog post links
class BlogPost extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Move in from the right after the blogpost is loaded
    this.wrapper.animate([
      { transform: 'translateX(100%)' },
      { transform: 'translateX(0)' }
    ], {
      duration: 450,
      fill: 'forwards',
      easing: 'ease-in-out',
      iterations: 1
    });
  }

  render() {
    const { prev, next } = this.props.pathContext;
    const { data, location } = this.props;
    return (
      <div
        ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)}
      >
        <Img
          style={{minHeight: '40vh'}}
          sizes={data.contentfulBlogPost.coverImage.sizes}  
        />
        <Container>
          <h2>{data.contentfulBlogPost.title}</h2>
          <p>{data.contentfulBlogPost.createdAt}</p>
          <p>{data.contentfulBlogPost.body.body}</p>
          <hr/>
          <div>
            {prev && <Link to={prev.slug}>Previous Post</Link>}
            {next && <Link to={next.slug}>Next Post</Link>}
          </div>
        </Container>
      </div>
    );
  } 
}


export const query = graphql`
  query BlogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
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
  }
`;

export default BlogPost;