import React from "react";
import style from './Item.module.scss'
import { ITask } from "../../../types/tasks";

interface Props {
    task: ITask,
    selectTask: (task: ITask) => void
}

const Item = ( {task, selectTask}: Props ) => {
    return (
        <li className={`${style.item} ${task.selected ? style.selectedItem : ''}`} onClick={() => selectTask(task)}>
            <h3>{task.name}</h3>
            <span>{task.time}</span>
        </li>
    )
}

export default Item;