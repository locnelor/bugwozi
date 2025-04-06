import {defineRouting} from "next-intl/routing";
import createMiddleware from "next-intl/middleware";


export const makeMiddleware = ({
    locales,
    defaultLocale = locales[0]
})=>{
    return createMiddleware(defineRouting({
        locales,
        localePrefix: 'as-needed',
        defaultLocale,
        localeDetection: false,
    }))
}

export const i18nConfig = {
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
}