import paths from '../constants/paths'
import api from './client'

export const getProjectsIndex = async (key: any) => {
  try {
    const projectsIndexPath = paths.projects.index()
    const {data} = await api.get(projectsIndexPath)

    return data
  } catch (e) {
    throw e
  }
}