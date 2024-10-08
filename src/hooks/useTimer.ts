import { useState, useRef, useEffect } from "react";

export const useTimer = () => {
    // Inputの値を読み取るためのuseRef。
    const inputHourRef = useRef<HTMLInputElement>(null);
    const inputMinRef = useRef<HTMLInputElement>(null);
    const inputSecRef = useRef<HTMLInputElement>(null);

    // 実際にカウントダウン処理を行うためのuseRef。
    const timerSecRef = useRef<number | null>(null);

    // カウントダウン表示を行うためのuseState。
    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    const [ms, setMs] = useState(0);

    // Inputを表示するかどうかのboolを保持するuseState。
    const [showInput, setShowInput] = useState(true);

    // 一時停止を操作した際に保持するための変数。
    const [isRunningTimer, setIsRunningTimer] = useState(false);

    // TODO: このあたりの変換系は使いまわす機会多そうなので、いつか./utils/useCalcCarryoverに切り出すか。
    // -----------------------------------ここからutil系-----------------------------------
    const calcCarryover = (value: number, max: number) => {
        const carryover = Math.floor(value / max);
        const remainder = value % max;
        return { carryover, remainder };
    };

    const convSecToHour = (totalSec: number) => {
        const afterHour = Math.floor(totalSec / 3600);
        const afterMin = Math.floor((totalSec % 3600) / 60);
        const afterSec = totalSec % 60;
        return { afterHour, afterMin, afterSec };
    };

    const convHourToSec = (
        beforeHour: number,
        beforeMin: number,
        beforeSec: number,
    ): number => beforeHour * 3600 + beforeMin * 60 + beforeSec;

    // 時間の繰り上がり計算を行う。
    const normalizeTime = (
        hour: number,
        min: number,
        sec: number,
        ms: number,
    ) => {
        let newHour = hour;
        let newMin = min;
        let newSec = sec;

        if (ms > 1000) {
            const { carryover, remainder } = calcCarryover(ms, 1000);
            newSec += carryover;
            ms = remainder;
        }

        if (newSec >= 60) {
            const { carryover, remainder } = calcCarryover(newSec, 60);
            newMin += carryover;
            newSec = remainder;
        }

        if (newMin >= 60) {
            const { carryover, remainder } = calcCarryover(newMin, 60);
            newHour += carryover;
            newMin = remainder;
        }

        // 最後に新しい時間を返す
        return { hour: newHour, min: newMin, sec: newSec, ms };
    };

    const formatTime = (num: number) => {
        return num.toString().padStart(2, "0");
    };

    // -----------------------------------ここまでutil系-----------------------------------

    // TODO: 長押しでもincrement, decrement出来るようにする。useRef、setIntervalとclearIntervalで実現可能。
    const incrementHour = () => {
        setHour((prevValue) => prevValue + 1);
    };

    const incrementMin = () => {
        setMin((prevValue) => prevValue + 1);
    };

    const incrementSec = () => {
        setSec((prevValue) => prevValue + 1);
    };

    const decrementHour = () => {
        if (hour) {
            setHour((prevValue) => prevValue - 1);
        }
    };

    const decrementMin = () => {
        if (min) {
            setMin((prevValue) => prevValue - 1);
        }
    };

    const decrementSec = () => {
        if (sec) {
            setSec((prevValue) => prevValue - 1);
        }
    };

    const runTimer = () => {
        if (timerSecRef.current) return; // 既にタイマーが動作している場合は処理しない。
        setIsRunningTimer(true);

        let totalSec = 0;

        const { hour, min, sec } = normalizeTime(
            parseInt(inputHourRef.current?.value || "0", 10),
            parseInt(inputMinRef.current?.value || "0", 10),
            parseInt(inputSecRef.current?.value || "0", 10),
            0,
        );
        setHour(hour);
        setMin(min);
        setSec(sec);
        totalSec = hour * 3600 + min * 60 + sec;

        // inputをhideしてdivをvisibleする
        setShowInput(false);

        // 実際にカウントダウンさせる動作。
        timerSecRef.current = window.setInterval(() => {
            if (totalSec > 0) {
                totalSec--;

                const { hour, min, sec } = normalizeTime(0, 0, totalSec, 0);

                setHour(hour);
                setMin(min);
                setSec(sec);
            } else {
                clearInterval(timerSecRef.current!);
                // TODO: DBへの保存機能が実装出来たらここのコメントアウト外す。
                // saveEndTimer();
                timerSecRef.current = null;
            }
        }, 1000);
    };

    const stopTimer = () => {
        if (timerSecRef.current) {
            clearInterval(timerSecRef.current);
            setShowInput(true);
            timerSecRef.current = null;
            setIsRunningTimer(false);
        }
    };

    const saveEndTimer = () => {};
    // ダイアログ表示(切り出す)実装する。
    // DBへの保存機能実装する。
    // Inputを空の状態に戻す。

    const withoutSaveEndTimer = () => {};
    // ダイアログ表示実装する(切り出す)。
    // Inputを空の状態に戻す。

    return {
        inputHourRef,
        getInputHourValue: () => inputHourRef.current?.value || "",
        inputMinRef,
        getInputMinValue: () => inputMinRef.current?.value || "",
        inputSecRef,
        getInputSecValue: () => inputSecRef.current?.value || "",
        hour,
        min,
        sec,
        ms,
        setHour,
        setMin,
        setSec,
        setMs,
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
    };
};

export default useTimer;
