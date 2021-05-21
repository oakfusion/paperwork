export interface IButtonProps {
  slug?: string
  backgroundColor: string
  img?: any
  iconColor?: string
  textColor?: string
}
export interface IHeadProps {
  title?: string
  description?: string
  keywords?: string
  author?: string
}
export interface ISideNavItemProps {
  slug: string
  name: string
  icon: any
}

export interface Item {
  id?: number
  sended: boolean
  vendor: string
  project: string
  timePeriod: string
  contractValue: string
  progress: string
  vendorMore: string[]
  timePeriodMore: string[]
  contractValueMore: string[]
}

export interface IContract {
  key: string
  array: any[]
}

export interface IContractTemplate {
  title: string
  text: string
  author: string
}
export interface IPopProps {
  editPopover: Function
  duplicatePopover: Function
  delPopover: Function
}
