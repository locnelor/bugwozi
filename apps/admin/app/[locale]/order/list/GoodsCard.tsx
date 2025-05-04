import { usePagination } from "@pkg/hooks"
import { FindGoodsQuery } from "../goods/page"
import { List, Modal, Button } from "antd"
import { useOpen } from "@pkg/hooks"
import { useEffect, useState } from "react"
import usePay from "#/hooks/usePay"


const PayQrCode = ({ goods }: any) => {
  const { getOrder } = usePay()
  useEffect(() => {
    getOrder(goods.uid);
  }, [])
  return (
    <div className="h-96 flex justify-center items-center">

    </div>
  )
}
const GoodsCard = () => {
  const [{ loading, data, onRefresh }, pagination] = usePagination({
    query: FindGoodsQuery,
  })

  const [open, onOpen, onClose] = useOpen()
  const [selectedGoods, setSelectedGoods] = useState<any>(null)

  return (
    <div>
      <List
        loading={loading}
        dataSource={data}
        renderItem={(item: any) => (
          <List.Item
            actions={[
              <Button
                key="create"
                type="link"
                onClick={() => {
                  setSelectedGoods(item)
                  onOpen()
                }}
              >
                创建
              </Button>
            ]}
          >
            <List.Item.Meta
              title={`${item.amount / 100} 元`}
              description={item.description}
            />
            <div>创建者: {item.user?.name}</div>
          </List.Item>
        )}
      />
      {pagination}

      <Modal
        title="创建订单"
        open={open}
        onCancel={onClose}
        footer={null}
      >
        {selectedGoods && (
          <PayQrCode
            goods={selectedGoods}
          />
        )}
      </Modal>
    </div>
  )
}

export default GoodsCard