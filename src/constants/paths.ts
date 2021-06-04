export default {
    contracts: {
        index: (status?: string) => `/contracts${status ? `/${status}` : ''}`
    },
    vendors: {
      index: () => '/vendors'
    },
    projects: {
      index: () => '/projects'
    }
}