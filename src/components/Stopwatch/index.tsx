import { ITask } from "../../types/tasks";
import { useState, useEffect } from 'react';
import Button from "../Button";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss"
import { toSeconds } from "../../common/utils/time";

interface Props {
    selected: ITask | undefined,
    endTask: (task:ITask|undefined) => void,
}

const Stopwatch = ({ selected, endTask } : Props) => {
    const [time, setTime] = useState<number>( selected?.time ? toSeconds(selected.time) : 0);
    const [timeoutID, setTimeoutID] = useState<NodeJS.Timeout>();

    useEffect(() => { setTime(selected?.time ? toSeconds(selected.time) : 0) }, [selected]);

    function regressive(counter: number = 0) {
        setTimeoutID(setTimeout(() => {
            if(counter > 0) {
                setTime(counter - 1);
                return regressive(counter - 1);
            }
            endTask(selected)
        }, 1000))
    }

    const finish = () => {
        clearTimeout(timeoutID);
        setTimeoutID(undefined);
        endTask(selected);
    }

    return (
        <div className={style.stopwatch}>
            <p className={style.title}>Escolha um card e inicie o cronômetro</p>
            <div className={style.clockWrapper}>
                <Clock time={time}/>
            </div>
            <div>
                <Button onClick={() => {regressive(time)}} className={style.button} >Começar</Button>
                <Button onClick={() => {finish()}} className={style.button}>Finalizar</Button>
            </div>
        </div>
    );
}

export default Stopwatch;