import "@fontsource-variable/josefin-sans";
import "modern-normalize";
import Clock from "./components/Clock";
import EndTitle from "./components/EndTitle";
import Interval from "./components/Interval";
import StartTitle from "./components/StartTitle";
import Workspaces from "./components/Workspaces";
import { GlazeWmProvider } from "./providers/GlazeWmProvider";
import { TimeProvider } from "./providers/TimeProvider";
import "./sass/style.scss";
// Supports weights 100-700
export default function App() {
  return (
    <GlazeWmProvider>
      <TimeProvider>
        <main className="container">
          <StartTitle />
          <Interval index={0} />
          <Clock />
          <Workspaces />
          <Interval index={1} />
          <EndTitle />
        </main>
      </TimeProvider>
    </GlazeWmProvider>
  );
}
