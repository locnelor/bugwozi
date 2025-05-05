import { usePagination } from "@pkg/hooks"
import { FindGoodsQuery } from "../goods/page"
import { List, Modal, Button, QRCode, Spin } from "antd"
import { useOpen } from "@pkg/hooks"
import { useEffect, useState } from "react"
import usePay from "#/hooks/usePay"


const PayQrCode = ({ goods }: any) => {
  const { getOrder, state, order, url, loading } = usePay()
  useEffect(() => {
    console.log(1)
    getOrder(goods.uid);
  }, [])
  if (order?.state === "SUCCESS") {
    return (
      <div className="h-96 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="mb-4 text-center">
            <h3 className="text-lg font-medium">{order?.description}</h3>
            <p className="text-xl font-bold text-green-500 mt-2">¥{order?.amount ? (order.amount / 100).toFixed(2) : '0.00'}</p>
            <div className="mt-4 text-green-600 text-lg font-bold">支付成功</div>
          </div>
        </div>
      </div>
    )
  }
  if (order?.state === "CLOSED") {
    return (
      <div className="h-96 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="mb-4 text-center">
            <h3 className="text-lg font-medium">{order?.description}</h3>
            <p className="text-xl font-bold text-gray-500 mt-2">¥{order?.amount ? (order.amount / 100).toFixed(2) : '0.00'}</p>
            <div className="mt-4 text-gray-600 text-lg font-bold">订单已关闭</div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="h-96 flex flex-col justify-center items-center">
      <Spin spinning={loading}>
        {url && (
          <div className="flex flex-col items-center">
            <div className="mb-4 text-center">
              <h3 className="text-lg font-medium">{order?.description}</h3>
              <p className="text-xl font-bold text-red-500 mt-2">¥{order?.amount ? (order.amount / 100).toFixed(2) : '0.00'}</p>
            </div>
            <QRCode
              value={url}
              size={200}
              bordered
            />
            <p className="mt-4 text-gray-500 text-sm">请使用微信扫码支付</p>
          </div>
        )}
      </Spin>
    </div>
  )
}
const GoodsCard = () => {
  const [{ loading, data }, pagination] = usePagination({
    query: FindGoodsQuery,
  })
  useEffect(()=>{
    console.log("card")
  },[])
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