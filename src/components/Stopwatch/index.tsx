import { ITask } from "../../types/tasks";
import { useState } from 'react';
import Button from "../Button";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss"
import { toSeconds } from "../../common/utils/time";

interface Props {
    selected: ITask | undefined,
}

const Stopwatch = ({ selected } : Props) => {

    const [time, setTime] = useState<Number>( selected?.time ? toSeconds(selected.time) : 0);

    return (
        <div className={style.stopwatch}>
            <p className={style.title}>Escolha um card e inicie o cronômetro</p>
            <div className={style.clockWrapper}>
                <Clock/>
            </div>
            <Button>Começar!</Button>
        </div>
    )
}

export default Stopwatch;