import WindowLayout from "../../ui/WindowLayout";

function Minecraft({ active }) {
  if (!active) return;

  return (
    <WindowLayout title="Minecraft" name="Minecraft" size={[640, 360]}>
      <div className="h-full p-1">
        <iframe
          title="Minecraft"
          src="https://classic.minecraft.net/"
          width={"100%"}
          height={"100%"}
        />
      </div>
    </WindowLayout>
  );
}

export default Minecraft;
