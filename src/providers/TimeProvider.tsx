import { DateTime } from "luxon";
import React, { createContext, useEffect, useState } from "react";

interface TimeContextProps {
  currentTime: DateTime;
}

export const TimeContext = createContext<TimeContextProps>({
  currentTime: DateTime.now(),
});

export const TimeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentTime, setCurrentTime] = useState(DateTime.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(DateTime.now());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <TimeContext.Provider value={{ currentTime }}>
      {children}
    </TimeContext.Provider>
  );
};
