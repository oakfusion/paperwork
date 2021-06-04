import { Project } from "./Project"
import { Vendor } from "./Vendor"

export type ContractType = 'SOW' | 'NDA'
export type ContractStatus = 'ACTIVE' | 'PENDING' | 'FINISHED'

export type ContractCurrency = 'EUR'

export type ContractMeta = {
  startDate: Date
  endDate: Date
  signDate: Date
  currency: ContractCurrency
  sent: boolean
  value: number
}

export type ContractRateInterval = 'Hour'

export type Contract = {
  uuid: string
  rate: number
  status: ContractStatus;
  rateInterval: ContractRateInterval
  type: ContractType
  totalUnits: number
  totalCost: number
  signed: boolean
  project: Project
  vendor: Vendor
  contractMeta: ContractMeta
}