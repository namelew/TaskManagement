import Item from "./Item";
import style from "./List.module.scss"

const List = () => {
    const tasks = [
        {
            name:'React',
            time: "2:00:00",
        },
        {
            name:'Javascript',
            time: "1:00:00",
        },
        {
            name:'Typescript',
            time: "3:00:00",
        },
    ]

    return (
        <aside className={style.taskList}>
            <h2> Estudos do dia </h2>
            <ul>
            { tasks.map((task, index) => <Item key={index} {...task}/>) }
            </ul>
        </aside>
    )
}

export default List;