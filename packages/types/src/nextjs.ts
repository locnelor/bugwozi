

export type AppLayoutProps = {
  children: any
  params: Promise<{ [key in string]: string }>
}

export type AppPageProps = {
  params: Promise<{ [key in string]: string }>
  searchParams: Promise<{ [key in string]: string }>
}