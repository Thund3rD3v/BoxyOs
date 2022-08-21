import WindowLayout from "../../ui/WindowLayout";

export default function TestWindow() {
  return (
    <WindowLayout title="TestWindow" name="TestWindow" size={[500, 250]}>
      <h1>Hello There</h1>
    </WindowLayout>
  );
}
