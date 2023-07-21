import style from "./Clock.module.scss";
import { toString } from "../../../common/utils/time";

interface Props {
    time: number,
}

const Clock = ({ time } : Props) => {
    const clockNumbers = toString(time);

    return (
        <>
            <span className={style.clockNumber}>{clockNumbers.minDozens}</span>
            <span className={style.clockNumber}>{clockNumbers.minUnits}</span>
            <span className={style.clockDiv}>:</span>
            <span className={style.clockNumber}>{clockNumbers.secDozens}</span>
            <span className={style.clockNumber}>{clockNumbers.secUnits}</span>
        </>
    )
}

export default Clock;