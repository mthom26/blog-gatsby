const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blogpost.js');

    resolve(
      graphql(
        `
        {
          allContentfulBlogPost {
            edges {
              node {
                title
                slug
                body {
                  body
                }
                createdAt
              }
            }
          }
        }
        `
      ).then(result => {
        if(result.errors) {
          reject(result.errors);
        }

        const posts = result.data.allContentfulBlogPost.edges;

        posts.forEach(({ node }, index) => {
          createPage({
            path: node.slug,
            component: blogPostTemplate,
            context: {
              slug: node.slug,
              prev: index === 0 ? null : posts[index-1].node,
              next: index === (posts.length - 1) ? null : posts[index+1].node
            }
          });
        });
      })
    )
  });
};