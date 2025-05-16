"use client"
import { useState, useCallback, useEffect, useMemo } from "react"
import { useLazyQuery, type DocumentNode } from "@apollo/client"
import { Pagination } from "antd"
interface UsePaginationOptions {
  query: DocumentNode
  variables?: Record<string, any>
  defaultPage?: number
  defaultSize?: number
}

export const usePagination = ({
  query,
  variables = {},
  defaultPage = 1,
  defaultSize = 10
}: UsePaginationOptions) => {
  const [refetch, { data: queryData, loading }] = useLazyQuery(query, {
    fetchPolicy: "no-cache"
  })
  const [page, setPage] = useState(defaultPage)
  const [size, setSize] = useState(defaultSize)
  const [total, setTotal] = useState(0)
  const [data, setData] = useState<any[]>([])
  const [time, setTime] = useState<any>()
  useEffect(() => {
    return () => clearTimeout(time);
  }, [time])
  const onRefresh = useCallback((data = variables) => {
    setTime(setTimeout(() => {
      refetch({
        variables: {
          pagination: {
            skip: (page - 1) * size,
            take: size,
            ...variables,
            ...data
          },
        }
      })
    }, 300))
  }, [variables, page, size, total])
  useEffect(() => {
    onRefresh()
  }, [])

  useEffect(() => {
    if (queryData) {
      const key = Object.keys(queryData)[0] as string;
      const listData = queryData[key];
      setTotal(listData.total)
      setPage(page => listData.page || page)
      setSize(size => listData.size || size)
      setData(listData.data.map((e: any, key: number) => ({ ...e, key: e.uid || e.id || key })))
    }
  }, [queryData])

  const onPageChange = useCallback((page: number, size: number) => {
    setPage(page)
    setSize(size)
    onRefresh({
      skip: (page - 1) * size,
      take: size,
    })
  }, [onRefresh])

  const onNext = useCallback(() => {
    if (page * size < total) {
      onPageChange(page + 1, size)
    }
  }, [onPageChange])

  const onPrev = useCallback(() => {
    if (page > 1) {
      onPageChange(page - 1, size)
    }
  }, [onPageChange])

  const onSizeChange = useCallback((newSize: number) => {
    onPageChange(1, newSize)
  }, [onPageChange])

  const pagination = useMemo(() => {
    return <Pagination
      current={page}
      pageSize={size}
      total={total}
      onChange={onPageChange}
      onShowSizeChange={(_, size) => onSizeChange(size)}
      showSizeChanger
      showQuickJumper
      showTotal={(total) => `共 ${total} 条`}
    />
  }, [page, size, total, onPageChange])

  return [
    {
      page,
      size,
      total,
      data,
      loading,
      onNext,
      onPrev,
      onPageChange,
      onSizeChange,
      onRefresh
    },
    pagination
  ] as const
}