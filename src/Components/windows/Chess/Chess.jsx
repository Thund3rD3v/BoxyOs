import { memo } from "react";
import WindowLayout from "../../ui/WindowLayout";

function Chess({ active }) {
  if (!active) return;

  return (
    <WindowLayout title="Chess" name="Chess" size={[640, 360]}>
      <div className="h-full p-1">
        <iframe
          title="Chess"
          src="https://www.crazygames.com/embed/master-chess"
          width="100%"
          height="100%"
        />
      </div>
    </WindowLayout>
  );
}

export default memo(Chess);
