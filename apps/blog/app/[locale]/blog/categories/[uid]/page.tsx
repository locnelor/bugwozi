import { AppPageProps } from "@pkg/types"
import PagePosts from "../../PagePosts"


const CategoriesSearchUidPage = async (props: AppPageProps) => {
  const searchParams = await props.searchParams
  const params = await props.params
  const tag = params.uid
  return <PagePosts
    searchParams={searchParams}
    categories={tag}
  />
}
export default CategoriesSearchUidPage