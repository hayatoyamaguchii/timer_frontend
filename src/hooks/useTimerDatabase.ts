export const useTimerDatabase = () => {
    const saveToDatabase = (data: any) => {
        console.log("Saving to database:", data);
        // APIリクエストやDB処理を記述
    };

    return { saveToDatabase };
};
