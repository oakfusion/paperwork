import paths from '../constants/paths'
import api from './client'

export const getVendorsIndex = async (key: any) => {
  try {
    const vendorsIndexPath = paths.vendors.index()
    const {data} = await api.get(vendorsIndexPath)

    return data
  } catch (e) {
    throw e
  }
}