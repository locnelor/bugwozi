import { useState, useEffect } from "react"

export const file2base64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })
}
export const useFileToBase64 = (file?: File) => {
  const [base64, setBase64] = useState<string>("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!file) {
      setBase64("")
      return
    }
    setLoading(true)
    file2base64(file)
      .then((res) => setBase64(res))
      .finally(() => setLoading(false))
  }, [file])

  return [base64, loading] as const
}