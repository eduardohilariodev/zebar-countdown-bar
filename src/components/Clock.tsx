import { useContext, useState } from "react";
import { TimeContext } from "../providers/TimeProvider";

export default function Clock() {
  const { currentTime } = useContext(TimeContext);
  const [goal, setGoal] = useState("");

  return (
    <div className="time">
      {/* <input
        spellCheck={false}
        type="text"
        name="goal"
        id="goal"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      /> */}
      {goal && <i className="emoji">🎯</i>}
      <div className="time__hours">{currentTime.toFormat("HH")}</div>
      <div className="time__minutes">{currentTime.toFormat("mm")}</div>
    </div>
  );
}
