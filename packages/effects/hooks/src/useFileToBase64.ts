import { useState, useEffect } from "react"

interface FileToBase64Options {
  maxWidth?: number
}

export const file2base64 = (file: File, options: FileToBase64Options = {}): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      const base64 = reader.result as string
      // 如果没有maxWidth选项或maxWidth小于等于0，直接返回原图
      if (!options?.maxWidth || options.maxWidth <= 0) {
        resolve(base64)
        return
      }
      // 创建图片对象
      const img = new Image()
      img.src = base64
      img.onload = () => {
        const canvas = document.createElement('canvas')
        let width = img.width
        let height = img.height
        if (width > (options.maxWidth || 0)) {
          const ratio = (options.maxWidth || 1) / width
          width = options.maxWidth || 1
          height = height * ratio
        }
        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext('2d')
        ctx?.drawImage(img, 0, 0, width, height)
        const resizedBase64 = canvas.toDataURL(file.type)
        resolve(resizedBase64)
      }

      img.onerror = () => reject(new Error('图片加载失败'))
    }
    reader.onerror = (error) => reject(error)
  })
}
export const useFileToBase64 = (file?: File, options?: FileToBase64Options) => {
  const [base64, setBase64] = useState<string>("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!file) {
      setBase64("")
      return
    }
    setLoading(true)
    file2base64(file, options)
      .then((res) => setBase64(res))
      .finally(() => setLoading(false))
  }, [file])

  return [base64, loading] as const
}