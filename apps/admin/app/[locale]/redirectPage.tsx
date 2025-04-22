"use client"

import { useEffect, useMemo } from "react";
import { useRouter } from "#/i18n/navigation";
import { PropsWithChildren } from "react"
import { usePathname } from "next/navigation";

const RedirectPage = ({ children }: PropsWithChildren) => {
    const router = useRouter()
    const pathname = usePathname()
    const firstPath = useMemo(() => pathname.split("/")[1], [pathname]);
    useEffect(() => {
        if (firstPath !== 'auth') {
            router.push("/auth/login")
        }
    }, [])
    if (firstPath === 'auth') return children
    return null
}

export default RedirectPage