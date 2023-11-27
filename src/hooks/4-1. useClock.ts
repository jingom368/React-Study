import { useState } from "react";
import { useInterval } from "./4-1. useInterval";

export const useClock = () => {
    const [today, setToday] = useState(new Date())
    useInterval(() => setToday(new Date()))
    return today
}