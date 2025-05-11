import { Card, Skeleton } from "antd"



const PageLoading = () => {

  return (
    <div className="container mx-auto">
      <Card>
        <Skeleton />
      </Card>
    </div>
  )
}
export default PageLoading