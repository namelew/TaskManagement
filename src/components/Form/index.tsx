import React from "react";
import Button from "../Button";
import style from "./Form.module.scss"
import { ITask } from "../../types/tasks";
import { v4 as uuidv4} from "uuid";

class Form extends React.Component<{setTasks: React.Dispatch<React.SetStateAction<ITask[]>>}> {
    state = {
        name: "",
        time: "",
    }
    addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.setTasks(olds => [...olds, {id: uuidv4(), ...this.state, selected:false, completed: false}])
        this.setState({
            name: "",
            time: "00:00:00",
        })
    }
    render(): React.ReactNode {
        return (
            <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">Adicione um novo estudo</label>
                    <input type="text" name="task" value={this.state.name} onChange={event => this.setState({ ...this.state, name: event.target.value})} id="task" placeholder="O que você quer estudar" required/>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">Tempo</label>
                    <input type="time" name="time" id="time" value={this.state.time} onChange={event => this.setState({ ...this.state, time: event.target.value})} step="1" min="00:00:00" max="01:30:00" placeholder="" required/>
                </div>
                <Button type="submit">Adicionar</Button>
            </form>
        )
    }
}

export default Form;