import React from "react";
import { Button } from "./";
import { useTimer } from "../hooks/useTimer";

const Timer = () => {
    const { time, startTimer, stopTimer, resetTimer } = useTimer();

    return (
        <div className="p-4">
            <div className="mb-4 text-4xl">{time}秒</div>

            <Button size="large" variant="primary" onClick={startTimer}>
                スタート
            </Button>
            <Button size="large" variant="primary" onClick={stopTimer}>
                ストップ
            </Button>
            <Button size="large" variant="alert" onClick={resetTimer}>
                リセット
            </Button>
        </div>
    );
};

export default Timer;
