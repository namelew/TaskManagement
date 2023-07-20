import React from "react";
import style from './Item.module.scss'

const Item = ( {name, time}: {name: string, time: React.ReactNode} ) => {
    return (
        <li className={style.item}>
            <h3>{name}</h3>
            <span>{time}</span>
        </li>
    )
}

export default Item;