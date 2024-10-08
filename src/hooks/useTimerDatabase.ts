import { useState, useRef } from "react";

export const useTimerDatabase = () => {
    const saveToDatabase = () => {
        /* Databaseに保存 */
    };
    const loadFromDatabase = () => {
        /* Databaseから読み取り */
    };

    return { saveToDatabase, loadFromDatabase };
};

export default useTimerDatabase;
