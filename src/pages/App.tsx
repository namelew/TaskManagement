import React ,{ useState } from 'react';
import Form from '../components/Form'
import List from '../components/List';
import style from './App.module.scss';
import Stopwatch from '../components/Stopwatch';
import { ITask } from '../types/tasks';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [selected, setSelected] = useState<ITask>()

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List tasks={tasks} selectTask={ (task:ITask) => {setSelected(task); setTasks(old => old.map(current => ({...current, selected: current.id === task.id})))}}/>
      <Stopwatch selected={selected}/>
    </div>
  );
}

export default App;
