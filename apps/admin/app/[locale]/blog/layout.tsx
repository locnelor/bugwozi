"use client"
import { PropsWithChildren } from "react"
import Page from "#/components/pages/Page"

export default function BlogLayout({ children }: PropsWithChildren) {
  return (
    <Page>
      {children}
    </Page>
  )
} 