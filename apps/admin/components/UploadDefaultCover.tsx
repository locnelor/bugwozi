import gqlError from "#/libs/gqlError"
import { gql, useMutation } from "@apollo/client"
import { useFileToBase64, useOpen, useSelectFile } from "@pkg/hooks"
import { Button, Modal } from "antd"
import { useCallback, useEffect, useMemo, useState } from "react"


interface Props {
  defaultCover?: string
  name: string
}
const UploadDefaultCover = ({
  defaultCover,
  name
}: Props) => {
  const [cover, setCover] = useState(defaultCover);
  const [open, onOpen, onCancel] = useOpen();
  const [files, selectFile] = useSelectFile({ accept: "image/*" });
  const [base64] = useFileToBase64(files[0])
  const query = useMemo(() => {
    return gql`
      mutation UpdateCover(
        $base64:String!
      ){
        ${name}(base64:$base64)
      }
    `
  }, [])
  const [update, { loading }] = useMutation(query, {
    onCompleted: onCancel,
    onError(error) {
      gqlError(error)
    },
  })
  useEffect(() => {
    if (!!base64) {
      setCover(base64)
    }
  }, [base64])

  const onOk = useCallback(() => {
    if (!base64) return onCancel();
    update({
      variables: {
        base64
      }
    })
  }, [base64])
  return (
    <div>
      <Button onClick={onOpen}>
        修改默认封面
      </Button>
      <Modal
        open={open}
        onCancel={onCancel}
        title="修改默认封面"
        onOk={onOk}
        confirmLoading={loading}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '300px',
            height: '200px',
            margin: '0 auto',
            backgroundColor: '#f5f5f5',
            border: '1px dashed #d9d9d9',
            borderRadius: '8px',
            cursor: 'pointer',
            position: 'relative'
          }}
          onClick={() => selectFile()}
        >
          {cover ? (
            <img
              src={cover}
              alt="封面图片"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain'
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          ) : (
            <div style={{
              position: 'absolute',
              width: '40px',
              height: '40px'
            }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '0',
                width: '100%',
                height: '2px',
                backgroundColor: '#999',
                transform: 'translateY(-50%)'
              }} />
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '0',
                width: '2px',
                height: '100%',
                backgroundColor: '#999',
                transform: 'translateX(-50%)'
              }} />
            </div>
          )}
        </div>
      </Modal>
    </div>
  )
}
export default UploadDefaultCover