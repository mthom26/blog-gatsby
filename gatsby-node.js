const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blogpost.js');

    resolve(
      graphql(
        `
        {
          allContentfulBlogPost(sort: { fields: date, order: DESC}) {
            edges {
              node {
                title
                slug
                body {
                  body
                }
                date
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
              prev: index === 0 ? posts[posts.length -1].node : posts[index-1].node,
              prevSlug: index === 0 ? posts[posts.length -1].node.slug : posts[index-1].node.slug,
              next: index === (posts.length - 1) ? posts[0].node : posts[index+1].node,
              nextSlug: index === (posts.length - 1) ? posts[0].node.slug : posts[index+1].node.slug
            }
          });
        });
      })
    )
  });
};