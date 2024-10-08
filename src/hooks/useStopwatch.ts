import { useState, useRef } from "react";

export const useStopwatch = () => {
    const [time, setTime] = useState(0);
    const StopwatchRef = useRef<NodeJS.Timeout | null>(null);

    const startStopwatch = () => {
        if (StopwatchRef.current) return;
        StopwatchRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 0.01);
        }, 10);
    };

    const lapStopwatch = () => {
        if (StopwatchRef.current) {
        }
    };

    const stopStopwatch = () => {
        if (StopwatchRef.current) {
            clearInterval(StopwatchRef.current);
            StopwatchRef.current = null;
        }
    };

    const saveEndStopwatch = () => {
        stopStopwatch();
        setTime(0);
    };

    const withoutSaveEndStopwatch = () => {
        stopStopwatch();
        setTime(0);
    };

    return {
        time,
        startStopwatch,
        lapStopwatch,
        stopStopwatch,
        saveEndStopwatch,
        withoutSaveEndStopwatch,
    };
};

export default useStopwatch;
