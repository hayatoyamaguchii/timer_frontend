import { useEffect, Dispatch, SetStateAction } from "react";

export const useTimerStorage = (
    seconds: number,
    setSeconds: Dispatch<SetStateAction<number>>,
) => {
    const saveToStorage = () => {
        localStorage.setItem("seconds", JSON.stringify(seconds));
    };

    const loadFromStorage = () => {
        const storedSeconds = localStorage.getItem("seconds");
        if (storedSeconds) {
            setSeconds(JSON.parse(storedSeconds));
        }
    };

    return { saveToStorage, loadFromStorage };
};
