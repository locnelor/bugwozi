import { BaseTimeFields } from "#/libs/fields";
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import { useCallback, useEffect, useState } from "react";

const orderFields = `
    ${BaseTimeFields}
    out_trade_no
    transaction_id
    amount
    description
    payOpenId
    trade_type
    state
    bank_type
    attach
    userId
    user {
      name
    }
    url
    goodsId
    goods {
      description
    }
`
export const GetNativeOrderMutation = gql`
  mutation GetNativeOrder(
    $id:String!
  ){
    getNativeOrder(
      id:$id
    ){
      ${orderFields}
    }
  }
`

export const ScanNativeOrderMutation = gql`
  mutation ScanNativeOrder(
    $id:String!
  ){
    scanNativeOrder(
      $uid:id
    ){
      out_trade_no
      state
    }
  }
`
export const QueryOrder = gql`
  query QueryOrder(
    $id:String!
  ){
    queryOrder(
      out_trade_no:$id
    ){
      ${orderFields}
    }
  }
`
interface Options {
  onCompleted?: (order: any) => any,
  onError?: (error: any) => any
}
const usePay = ({
  onCompleted,
  onError
}: Options = {}) => {
  const [url, setUrl] = useState("");
  const [queryOrder] = useLazyQuery(QueryOrder);
  const [scan] = useMutation(ScanNativeOrderMutation, {
    onCompleted({ scanNativeOrder }) {
      const { state, out_trade_no } = scanNativeOrder
      console.log(state, out_trade_no)
    },
  })
  const [time, setTime] = useState<NodeJS.Timeout>()
  const [getNative, { loading }] = useMutation(GetNativeOrderMutation, {
    onCompleted({ getNativeOrder }) {
      setUrl(getNativeOrder.url)
      setTime(setInterval(() => {
        scan({
          variables: {
            id: getNativeOrder.goodsId
          }
        })
      }, 2000))
    },
  })
  useEffect(() => {
    return () => clearTimeout(time);
  }, [time])
  const getOrder = useCallback((uid: any) => {
    getNative({
      variables: {
        uid
      }
    })
  }, [])


  return {
    getOrder,
    loading,
    url
  }
}
export default usePay