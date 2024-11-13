import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { motion, TargetAndTransition } from "framer-motion";
import type { Workspace as WorkspaceType } from "glazewm";
import type { GlazeWmOutput } from "zebar";
import { GlazeWmContext } from "../providers/GlazeWmProvider";

export default function Workspaces() {
  const { glazewm } = useContext(GlazeWmContext);
  const [activeLabel, setActiveLabel] = useState("");

  const [position, setPosition] = useState<TargetAndTransition>({
    left: 0,
    inlineSize: 0,
  });

  return (
    <>
      {glazewm && (
        <nav className="workspaces">
          {glazewm.currentWorkspaces.map((workspace) => (
            <>
              <Workspace
                workspace={workspace}
                glazewm={glazewm}
                setPosition={setPosition}
                setActiveLabel={setActiveLabel}
              />
              <Cursor
                position={position}
                label={activeLabel}
              />
            </>
          ))}
        </nav>
      )}
    </>
  );
}

function Workspace({
  workspace,
  glazewm,
  setPosition,
  setActiveLabel,
}: {
  workspace: WorkspaceType;
  glazewm: GlazeWmOutput;
  setPosition: Dispatch<SetStateAction<TargetAndTransition>>;
  setActiveLabel: Dispatch<SetStateAction<string>>;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const focusedWorkspace = glazewm?.currentWorkspaces.find(
      (workspace) => workspace.hasFocus
    );

    if (
      !(
        focusedWorkspace &&
        focusedWorkspace.name === workspace.name &&
        ref.current
      )
    ) {
      return;
    }

    const { width } = ref.current.getBoundingClientRect();
    setActiveLabel(workspace.displayName);

    setPosition({
      width,
      left: ref.current.offsetLeft,
    });
  }, [glazewm?.currentWorkspaces, workspace.hasFocus]); // Add workspace.hasFocus here

  return (
    <button
      ref={ref}
      key={workspace.name}
      className={`workspace ${workspace.hasFocus ? "" : ""} ${
        workspace.isDisplayed ? "" : ""
      }`}
      onClick={() => {
        glazewm.runCommand(`focus --workspace ${workspace.name}`);
      }}
    >
      {workspace.displayName ?? workspace.name}
    </button>
  );
}

function Cursor({
  position,
  label,
}: {
  position: TargetAndTransition;
  label: string;
}) {
  return (
    <motion.button
      animate={position}
      className="cursor"
    >
      {label}
    </motion.button>
  );
}
