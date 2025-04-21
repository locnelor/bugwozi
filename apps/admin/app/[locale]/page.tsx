"use client"
import useViewer from "#/hooks/viewer/useViewer";
import { useEffect } from "react";
const HomePage = () => {
  const viewer = useViewer();
  useEffect(() => {
    console.log(viewer)
  }, [viewer])
  return (
    <div>

    </div>
  )
};

export default HomePage;
