import { useCallback, useState } from "react"


export const useOpen = (defaultOpen = false) => {
  const [open, setOpen] = useState(defaultOpen);
  const onOpen = useCallback(() => setOpen(true), []);
  const onClose = useCallback(() => setOpen(false), []);
  return [open, onOpen, onClose] as const
}