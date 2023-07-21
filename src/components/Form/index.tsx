import React, {useState} from "react";
import Button from "../Button";
import style from "./Form.module.scss"
import { ITask } from "../../types/tasks";
import { v4 as uuidv4} from "uuid";


interface Props {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

const Form = ( { setTasks } : Props) => {
    const [name, setName] = useState<string>('');
    const [time, setTime] = useState<string>('00:00:00');

    const addTask = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setTasks(olds => [...olds, {id: uuidv4(), name, time, selected:false, completed: false}]);

        setName('');
        setTime('00:00:00');
    }

    return (
        <form className={style.newTask} onSubmit={addTask}>
            <div className={style.inputContainer}>
                <label htmlFor="task">Adicione um novo estudo</label>
                <input type="text" name="task" value={name} onChange={event => setName(event.target.value)} id="task" placeholder="O que você quer estudar" required/>
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="time">Tempo</label>
                <input type="time" name="time" id="time" value={time} onChange={event => setTime(event.target.value)} step="1" min="00:00:00" max="01:30:00" placeholder="" required/>
            </div>
            <Button type="submit">Adicionar</Button>
        </form>
    )
}

export default Form;