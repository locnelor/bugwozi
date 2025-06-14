import useSelectFile from "#/hooks/useSelectFile"
import { useEffect, useState } from "react"
import { Image } from "antd"
import { file2base64 } from "@pkg/hooks"

interface Base64FieldProps {
  value?: string
  onChange?: (value: string) => void
}

const Base64Field: React.FC<Base64FieldProps> = ({
  value,
  onChange,
  ...options
}) => {
  const [preview, setPreview] = useState<string>()

  const [_, selectFile] = useSelectFile({
    accept: 'image/*',
    multiple: false,
    onSelected: async (files) => {
      if (files.length === 0) return
      const file = files[0]
      const base64 = await file2base64(file, options)
      onChange?.(base64);
    }
  })

  useEffect(() => {
    setPreview(value)
  }, [value])

  return (
    <div onClick={selectFile} style={{ cursor: 'pointer' }}>
      {preview ? (
        <Image src={preview?.startsWith('data:image') ? preview.substring(preview.indexOf(',') + 1) : preview} alt="preview" width={200} />
      ) : (
        <div style={{
          width: 200,
          height: 200,
          border: '1px dashed #d9d9d9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          点击选择图片
        </div>
      )}
    </div>
  )
}
export default Base64Field