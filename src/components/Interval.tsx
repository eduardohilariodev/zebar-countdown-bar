import { useContext, useEffect, useRef, useState } from "react";
import { TimeContext } from "../providers/TimeProvider";
import Goal from "./Goal";

type TimeIntervalMode = "active" | "idle" | "passed";
interface TimeIntervalProps {
  index: number;
}

export default function Interval({ index }: TimeIntervalProps) {
  const [mode, setMode] = useState<TimeIntervalMode>("idle");
  const [progress, setProgress] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);
  const minutesLeft = useRef(0);
  const previousMinute = useRef<number | null>(null);
  const { currentTime } = useContext(TimeContext);

  useEffect(() => {
    const minutes = currentTime.minute;

    if (previousMinute.current !== minutes && minutes % 10 === 0) {
      setIsFlashing(true);
      document.querySelector(".container")?.classList.add("flash");

      setTimeout(() => {
        setIsFlashing(false);
        document.querySelector(".container")?.classList.remove("flash");
      }, 1500);
    }
    previousMinute.current = minutes;

    minutesLeft.current =
      index === 0 ? 30 - (minutes % 30) : 60 - (minutes % 60);
    const currentInterval = Math.floor(minutes / 30);
    const minutesWithinInterval = minutes % 30;
    const intervalProgress = ((29 - minutesWithinInterval) / 29) * 100;

    setProgress(intervalProgress);

    if (currentInterval === index) {
      setMode("active");
    } else if (currentInterval > index) {
      setMode("passed");
    } else {
      setMode("idle");
    }
  }, [currentTime, index]);

  return (
    <div className={`interval ${isFlashing ? "flash" : ""}`}>
      <div className="progress">
        {mode === "active" && (
          <div className="pointer">
            <div className="pointer__fill " />
            <div className="pointer__glow" />
          </div>
        )}
        {mode !== "passed" && (
          <div
            className={`${
              mode === "active" ? "" : "progress__fill--idle"
            } progress__fill ${mode}`}
            style={{ inlineSize: `${mode === "active" ? progress : 100}%` }}
          />
        )}
        {index === 3 && (
          <div className="minutes-left__foreground">
            {minutesLeft.current}
            <div className="minutes-left__background">
              {minutesLeft.current}
            </div>
          </div>
        )}
      </div>
      {(mode === "active" || mode !== "passed") && (
        <div className="minutes-left">
          <span className="minutes-left__text">
            <span className="minutes-left__dash">-&nbsp;</span>
            {minutesLeft.current}
          </span>
        </div>
      )}
      {index === 0 && <Goal />}
    </div>
  );
}
