import { ITask } from "../../types/tasks";
import Item from "./Item";
import style from "./List.module.scss"

interface Props {
    tasks: ITask[],
    selectTask: (task: ITask) => void
}

const List = ({ tasks, selectTask } : Props) => {
    return (
        <aside className={style.taskList}>
            <h2> Estudos do dia </h2>
            <ul>
            { tasks.map((task, _) => <Item key={task.id} selectTask={selectTask} task={task}/>) }
            </ul>
        </aside>
    )
}

export default List;