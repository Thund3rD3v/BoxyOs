import React from "react";
import WindowLayout from "../../ui/WindowLayout";

function TestWindow({ active }) {
  if (!active) return;

  return (
    <WindowLayout title="TestWindow" name="TestWindow" size={[500, 250]}>
      <h1>Hello There</h1>
    </WindowLayout>
  );
}

export default TestWindow;
