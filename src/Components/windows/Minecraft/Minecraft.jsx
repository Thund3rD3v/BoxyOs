import WindowLayout from "../../ui/WindowLayout";

export default function Minecraft() {
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
