export interface SubPageNavItem {
  text: string
  path: string
}

export interface PageNavItem {
  page: SubPageNavItem
  subPages?: SubPageNavItem[]
}
