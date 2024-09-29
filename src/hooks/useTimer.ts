import { useState, useRef } from "react";

export const useTimer = () => {
    const [time, setTime] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const startTimer = () => {
        if (timerRef.current) return; // 既にタイマーが動いている場合は何もしない
        timerRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 1); // 1秒ごとに時間を加算
        }, 1000);
    };

    const stopTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    };

    const resetTimer = () => {
        stopTimer();
        setTime(0);
    };

    return { time, startTimer, stopTimer, resetTimer };
};

export default useTimer;
