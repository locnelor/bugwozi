import { useCallback, useState } from "react"

export const useSelectFile = ({
  accept = "*",
  multiple = false,
  onSelected,
}: {
  accept?: string
  multiple?: boolean
  onSelected?: (files: File[]) => void
} = {}) => {
  const [files, setFiles] = useState<File[]>([])

  const selectFile = useCallback(() => {
    const input = document.createElement("input")
    input.type = "file"
    input.accept = accept
    input.multiple = multiple

    input.onchange = () => {
      if (input.files) {
        const selectedFiles = Array.from(input.files)
        setFiles(selectedFiles)
        onSelected?.(selectedFiles)
      }
    }

    input.click()
  },
    []
  )

  return [
    files,
    selectFile,
  ] as const
}

export default useSelectFile