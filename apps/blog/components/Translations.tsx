"use client"

import { useTranslations } from "next-intl";
import { createContext, PropsWithChildren, useContext } from "react"

const TranslationsContext = createContext<{
  t: (key: string) => string
}>({ t: () => "" });

export const TranslationProvider = ({ name, children }: PropsWithChildren<{ name: string }>) => {
  const t = useTranslations(name);
  return (
    <TranslationsContext.Provider value={{ t }}>
      {children}
    </TranslationsContext.Provider>
  )
}
export const Translation = ({ name }: { name: string }) => {
  const context = useContext(TranslationsContext);
  const t = context.t;
  return t(name)
}