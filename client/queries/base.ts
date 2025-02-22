
export const BaseFields = `
id
createAt
updateAt
`
export interface BaseEntity {
  id: number
  createAt: Date
  updateAt: Date
}

export const PaginationFields = `
  total
  page
  size
`
export interface BasePagination<T = never> {
  total: number,
  page: number,
  size: number,
  data: T[]
}
