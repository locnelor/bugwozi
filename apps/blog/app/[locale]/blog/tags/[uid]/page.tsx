import { AppPageProps } from "@pkg/types"
import PagePosts from "../../PagePosts"


const TagsSearchUidPage = async (props: AppPageProps) => {
  const searchParams = await props.searchParams
  const params = await props.params
  const tag = params.uid
  return <PagePosts
    searchParams={searchParams}
    tag={tag}
  />
}
export default TagsSearchUidPage