import { getViewer } from "@/hooks/viewer/getViewer";



const TestPage = async () => {
  const viewer = await getViewer();
  return (
    <div>
      {viewer?.name}
    </div>
  )
}
export default TestPage