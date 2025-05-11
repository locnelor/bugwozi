import dayjs from "dayjs"
const baseURI = process.env.NEXT_PUBLIC_BASE_URL;
export const getCover = (uid: string, name: string) => {
  return `${baseURI}/cover/${uid}/${name}`
}
export const getPostsCover = (uid: string) => {
  return getCover(uid, "posts")
}

export const getCategoriesCover = (uid: string) => {
  return getCover(uid, "categories")
}

export const getLinkCover = (uid: string) => {
  return getCover(uid, "link")
}

export const getUserAvatar = (uid: string) => {
  return getCover(uid, "user")
}
export const DEFAULT_POST_COVER = `${baseURI}/cover/default/post`
export const DEFAULT_CATEGORIES_COVER = `${baseURI}/cover/default/categories`
export const DEFAULT_LINK_COVER = `${baseURI}/cover/default/link`


export const formatDate = (date: any) => dayjs(date).format("YYYY-MM-DD")
export const formatDateTime = (date: any) => dayjs(date).format("YYYY-MM-DD HH:mm:ss")