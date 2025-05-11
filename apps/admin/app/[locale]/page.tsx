"use client"
import useViewer from "#/hooks/viewer/useViewer";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const HomePage = () => {
  const viewer = useViewer();
  useEffect(() => {
    console.log(viewer)
  }, [viewer])
  const router = useRouter();
  useEffect(() => {
    router.push("/dashboard")
  }, [])
  return (
    <div>

    </div>
  )
};

export default HomePage;
