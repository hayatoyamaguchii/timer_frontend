import React, { useState, useEffect, useRef } from "react";
import { Button } from "./";
import { useTimer, useTimerStorage, useTimerDatabase } from "../hooks";

import { MdPlayArrow, MdPause, MdOutlineTimer, MdSave } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";

const Timer = () => {
    const {
        inputHourRef,
        getInputHourValue,
        inputMinRef,
        getInputMinValue,
        inputSecRef,
        getInputSecValue,
        hour,
        min,
        sec,
        setHour,
        setMin,
        setSec,
        incrementHour,
        incrementMin,
        incrementSec,
        decrementHour,
        decrementMin,
        decrementSec,
        normalizeTime,
        calcCarryover,
        formatTime,
        runTimer,
        stopTimer,
        saveEndTimer,
        withoutSaveEndTimer,
        showInput,
    } = useTimer();
    // const { saveToStorage, loadFromStorage } = useTimerStorage();

    // // コンポーネントがマウントされたときにlocalStorageから時間を読み込む
    // useEffect(() => {
    //     loadFromStorage();
    // }, []);

    // // secondsが変化するたびにlocalStorageに保存
    // useEffect(() => {
    //     saveToStorage();
    // }, []);

    return (
        <div className="mx-auto mt-5 max-w-screen-lg border p-5">
            <Button size="large" variant="secondary" onClick={incrementHour}>
                +1時間
            </Button>
            <Button size="large" variant="secondary" onClick={incrementMin}>
                +1分
            </Button>
            <Button size="large" variant="secondary" onClick={incrementSec}>
                +1秒
            </Button>
            {showInput && (
                <div className="flex">
                    <span className="text-xl">残り時間: {}</span>
                    <input
                        className="border"
                        type="number"
                        placeholder="0"
                        ref={inputHourRef}
                        value={hour}
                    ></input>
                    <input
                        className="border"
                        type="number"
                        placeholder="0"
                        ref={inputMinRef}
                        value={min}
                    ></input>
                    <input
                        className="border"
                        type="number"
                        placeholder="0"
                        ref={inputSecRef}
                        value={sec}
                    ></input>
                </div>
            )}
            {!showInput && (
                <div>
                    <span>{formatTime(hour)}:</span>
                    <span>{formatTime(min)}:</span>
                    <span>{formatTime(sec)}</span>
                </div>
            )}
            <div>
                <Button
                    size="large"
                    variant="secondary"
                    onClick={decrementHour}
                >
                    -1時間
                </Button>
                <Button size="large" variant="secondary" onClick={decrementMin}>
                    -1分
                </Button>
                <Button size="large" variant="secondary" onClick={decrementSec}>
                    -1秒
                </Button>
            </div>
            <div>
                <Button size="large" variant="primary" onClick={runTimer}>
                    <MdPlayArrow />
                    開始
                </Button>
                <Button size="large" variant="primary" onClick={stopTimer}>
                    <MdPause />
                    一時停止
                </Button>
                <Button size="large" variant="alert" onClick={saveEndTimer}>
                    <MdSave />
                    記録/終了
                </Button>
                <Button
                    size="large"
                    variant="alert"
                    onClick={withoutSaveEndTimer}
                >
                    <IoMdTrash />
                    破棄/終了
                </Button>
            </div>
        </div>
    );
};

export default Timer;
