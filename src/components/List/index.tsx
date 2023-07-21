import { ITask } from "../../types/tasks";
import Item from "./Item";
import style from "./List.module.scss"

const List = ({ tasks } : { tasks: ITask[] }) => {
    return (
        <aside className={style.taskList}>
            <h2> Estudos do dia </h2>
            <ul>
            { tasks.map((task, _) => <Item key={task.id} {...task}/>) }
            </ul>
        </aside>
    )
}

export default List;