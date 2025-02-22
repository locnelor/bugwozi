import { useCallback, useState } from "react";


const useOpen = (defaultValue = false) => {
  const [open, setOpen] = useState(defaultValue)
  const onOpen = useCallback(() => setOpen(true), []);
  const onCancel = useCallback(() => setOpen(false), []);
  return [open, onOpen, onCancel] as const
};
export default useOpen