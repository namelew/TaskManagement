import React from "react";
import style from './Item.module.scss'
import { ITask } from "../../../types/tasks";

interface Props {
    task: ITask,
    selectTask: (task: ITask) => void
}

const Item = ( {task, selectTask}: Props ) => {
    return (
        <li className={`${style.item} ${task.selected ? style.selectedItem : ''} ${task.completed ? style.doneItem : ''}`} onClick={() => !task.completed && selectTask(task)}>
            <h3>{task.name}</h3>
            <span>{task.time}</span>
            {task.completed && <span className={style.done} aria-label="task done"></span>}
        </li>
    );
}

export default Item;