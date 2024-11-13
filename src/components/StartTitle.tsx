import { useContext, useEffect, useState } from "react";
import { GlazeWmContext } from "../providers/GlazeWmProvider";

export default function StartTitle() {
  const [title, setTitle] = useState("");
  const { glazewm } = useContext(GlazeWmContext);

  const { title: focusedContainerTitle }: { title: string } =
    (glazewm?.focusedContainer || { title: "" }) as {
      title: string;
    };

  useEffect(() => {
    const ellipsedTitle =
      focusedContainerTitle && focusedContainerTitle.length > 50
        ? focusedContainerTitle.substring(0, 24) +
          " ... " +
          focusedContainerTitle.substring(
            focusedContainerTitle.length - 25,
            focusedContainerTitle.length
          )
        : focusedContainerTitle;
    setTitle(ellipsedTitle);
  }, [focusedContainerTitle]);

  return <p className="start-title">{title || ""}</p>;
}
