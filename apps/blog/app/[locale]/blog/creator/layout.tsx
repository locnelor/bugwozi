import { getViewer } from "#/hooks/viewer/getViewer"


const CreatorLayout = async ({ children }: any) => {
   await getViewer(true);
  return children
}
export default CreatorLayout