import React from "react";
import style from './Item.module.scss'
import { ITask } from "../../../types/tasks";

const Item = ( {id ,name, time, selected, completed}: ITask ) => {
    return (
        <li className={style.item}>
            <h3>{name}</h3>
            <span>{time}</span>
        </li>
    )
}

export default Item;