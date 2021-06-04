const path = require('path')

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/contracts/)) {
    createPage({
      path: "/contracts",
      matchPath: "/contracts/:status",
      component: path.resolve('src/pages/contracts.tsx')
    })
  }
}