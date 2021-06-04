import paths from '../constants/paths'
import api from './client'

export const getContractsIndex = async (options: any) => {
  try {
    const [, params] = options.queryKey
    const contractsIndexPath = paths.contracts.index(params.status)
    const {data} = await api.get(contractsIndexPath)

    return data
  } catch (e) {
    throw e
  }
}