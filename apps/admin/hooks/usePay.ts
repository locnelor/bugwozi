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
      uid:$id
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
  onError?: (error: string) => any
}
const usePay = ({
  onCompleted,
  onError
}: Options = {}) => {
  const [url, setUrl] = useState("");
  const [order, setOrder] = useState(null);
  const [queryOrder] = useLazyQuery(QueryOrder);
  const [time, setTime] = useState<NodeJS.Timeout>();
  const [state, setState] = useState("");
  const [scan] = useMutation(ScanNativeOrderMutation, {
    onCompleted({ scanNativeOrder }) {
      const { state, out_trade_no } = scanNativeOrder
      setState(state);
      if (state === "NOTPAY") return;
      if (state === "SUCCESS") {
        queryOrder({
          variables: {
            id: out_trade_no,
          }
        }).then(({ data: { queryOrder } }) => {
          setOrder(queryOrder)
          if (!!onCompleted) onCompleted(queryOrder)
        })
        setTime(null);
        return;
      }
      clearTimeout(time);
      setTime(null);
      if (onError) onError(state)
    },
  })
  const [getNative, { loading }] = useMutation(GetNativeOrderMutation, {
    onCompleted({ getNativeOrder }) {
      setOrder(getNativeOrder);
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
  const getOrder = useCallback((id: any) => {
    getNative({
      variables: {
        id
      }
    })
  }, [])


  return {
    getOrder,
    loading,
    url,
    state,
    order
  }
}
export default usePay