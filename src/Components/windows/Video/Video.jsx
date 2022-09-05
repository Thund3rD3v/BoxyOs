import React from "react";
import WindowLayout from "../../ui/WindowLayout";

function Video({ active }) {
  if (!active) return;

  return (
    <WindowLayout title="Get ricked rolled" name="Video" size={[600, 400]}>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?&autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </WindowLayout>
  );
}

export default Video;
