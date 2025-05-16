import { getViewer } from "#/hooks/viewer/getViewer"
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: '在这里记录你的灵感',
}
const CreatorLayout = async ({ children }: any) => {
  await getViewer(true);
  return children
}
export default CreatorLayout