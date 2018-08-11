/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___orderId] }
        limit: 1000
      ) {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      let templateName
      if (node.fileAbsolutePath.includes('/clinics/')) {
        templateName = 'clinicTemplate'
      } else if (node.fileAbsolutePath.includes('/specialists/')) {
        templateName = 'specialistTemplate'
      } else {
        return
      }
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`src/templates/${templateName}.js`),
        context: {}, // additional data can be passed via context
      })
    })
  })
}
