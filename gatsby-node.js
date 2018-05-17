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

        result.data.allContentfulBlogPost.edges.map(({ node }) => {
          createPage({
            path: node.slug,
            component: blogPostTemplate,
            context: {
              slug: node.slug
            }
          });
        });
      })
    )
  });
};