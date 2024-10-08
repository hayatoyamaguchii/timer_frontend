import React from "react";
import { Button } from "./";
import { useStopwatch } from "../hooks/useStopwatch";

import { MdPlayArrow, MdPause, MdOutlineTimer, MdSave } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";

const Stopwatch = () => {
    const {
        time,
        startStopwatch,
        lapStopwatch,
        stopStopwatch,
        saveEndStopwatch,
        withoutSaveEndStopwatch,
    } = useStopwatch();

    return (
        <div className="mx-auto mt-5 max-w-screen-lg border p-5">
            <div className="flex">
                <div className="mb-4 text-4xl">{time}</div>
            </div>

            <Button size="large" variant="primary" onClick={startStopwatch}>
                <MdPlayArrow />
                記録開始
            </Button>
            <Button size="large" variant="primary" onClick={stopStopwatch}>
                <MdPause />
                停止
            </Button>
            <Button size="large" variant="primary" onClick={lapStopwatch}>
                <MdOutlineTimer />
                ラップ
            </Button>
            <Button size="large" variant="alert" onClick={saveEndStopwatch}>
                <MdSave />
                記録/終了
            </Button>
            <Button
                size="large"
                variant="alert"
                onClick={withoutSaveEndStopwatch}
            >
                <IoMdTrash />
                破棄/終了
            </Button>
        </div>
    );
};

export default Stopwatch;
