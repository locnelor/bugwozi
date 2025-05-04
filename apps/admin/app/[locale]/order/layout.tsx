"use client"
import { PropsWithChildren } from "react"
import Page from "#/components/pages/Page"

export default function OrderLayout({ children }: PropsWithChildren) {
  return (
    <Page>
      {children}
    </Page>
  )
} 