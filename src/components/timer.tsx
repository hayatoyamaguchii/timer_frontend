import React, { useState, useEffect, useRef } from "react";
import { Button, Modal } from "./";
import { useTimer, useTimerStorage, useTimerDatabase } from "../hooks";

import { MdPlayArrow, MdPause, MdStop } from "react-icons/md";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

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
        timerSecRef,
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
        saveAndEndTimer,
        discardAndEndTimer,
        showInput,
    } = useTimer();
    // const { saveToStorage, loadFromStorage } = useTimerStorage();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // TODO: コンポーネントがマウントされたときにlocalStorageから時間を読み込む。
    // useEffect(() => {
    //     loadFromStorage();
    // }, []);

    // secondsが変化するたびにlocalStorageに保存。
    // useEffect(() => {
    //     saveToStorage();
    // }, []);

    const timerEnd = () => {
        if (timerSecRef.current) {
            setIsModalOpen(true);
        } else {
            console.log("動作中じゃないよ");
        }
    };

    const handleEnd = (action: () => void) => {
        action();
        setIsModalOpen(false);
    };

    const renderContent = () => {
        if (showInput) {
            return (
                <>
                    <div>
                        <Button
                            size="timer"
                            variant="timer"
                            onClick={incrementHour}
                        >
                            <GoTriangleUp />
                        </Button>
                        <Button
                            size="timer"
                            variant="timer"
                            onClick={incrementMin}
                        >
                            <GoTriangleUp />
                        </Button>
                        <Button
                            size="timer"
                            variant="timer"
                            onClick={incrementSec}
                        >
                            <GoTriangleUp />
                        </Button>
                    </div>
                    <div className="flex">
                        <input
                            className="ml-5 w-64 border text-center"
                            type="number"
                            placeholder="0"
                            ref={inputHourRef}
                            value={hour}
                            onChange={(e) => setHour(Number(e.target.value))}
                        ></input>
                        <div className="flex w-5 items-center justify-center">
                            :
                        </div>
                        <input
                            className="h-32 w-64 border text-center"
                            type="number"
                            placeholder="0"
                            ref={inputMinRef}
                            value={min}
                            onChange={(e) => setMin(Number(e.target.value))}
                        ></input>
                        <div className="flex w-5 items-center justify-center">
                            :
                        </div>
                        <input
                            className="w-64 border text-center"
                            type="number"
                            placeholder="0"
                            ref={inputSecRef}
                            value={sec}
                            onChange={(e) => setSec(Number(e.target.value))}
                        ></input>
                    </div>
                    <div>
                        <Button
                            size="timer"
                            variant="timer"
                            onClick={decrementHour}
                        >
                            <GoTriangleDown />
                        </Button>
                        <Button
                            size="timer"
                            variant="timer"
                            onClick={decrementMin}
                        >
                            <GoTriangleDown />
                        </Button>
                        <Button
                            size="timer"
                            variant="timer"
                            onClick={decrementSec}
                        >
                            <GoTriangleDown />
                        </Button>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="flex">
                        <div className="ml-5 flex h-32 w-64 items-center justify-center text-center">
                            {formatTime(hour)}
                        </div>
                        <div className="flex w-5 items-center justify-center">
                            :
                        </div>
                        <div className="flex h-32 w-64 items-center justify-center text-center">
                            {formatTime(min)}
                        </div>
                        <div className="flex w-5 items-center justify-center">
                            :
                        </div>
                        <div className="flex h-32 w-64 items-center justify-center text-center">
                            {formatTime(sec)}
                        </div>
                    </div>
                </>
            );
        }
    };

    return (
        <>
            <div className="mx-auto mt-5 max-w-screen-lg border p-5">
                {renderContent()}
                <div>
                    <Button
                        size="large"
                        variant="primary"
                        onClick={runTimer}
                        disabled={timerSecRef.current}
                    >
                        <MdPlayArrow />
                        開始
                    </Button>
                    <Button
                        size="large"
                        variant="primary"
                        onClick={stopTimer}
                        disabled={!timerSecRef.current}
                    >
                        <MdPause />
                        一時停止
                    </Button>
                    <Button
                        size="large"
                        variant="alert"
                        onClick={timerEnd}
                        disabled={!timerSecRef.current}
                    >
                        <MdStop />
                        終了
                    </Button>
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                message="保存して終了しますか？"
                buttons={[
                    {
                        label: "キャンセル",
                        onClick: () => setIsModalOpen(false),
                    },
                    {
                        label: "保存して終了",
                        onClick: () => handleEnd(saveAndEndTimer),
                    },
                    {
                        label: "破棄して終了",
                        onClick: () => handleEnd(discardAndEndTimer),
                    },
                ]}
            />
        </>
    );
};

export default Timer;
