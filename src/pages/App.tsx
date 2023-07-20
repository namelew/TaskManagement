import React /*,{ useState }*/ from 'react';
import Form from '../components/Form'
import List from '../components/List';
import style from './App.module.scss';
import Stopwatch from '../components/Stopwatch';

function App() {
  //const [tasks, setTask] = useState([])

  return (
    <div className={style.AppStyle}>
      <Form/>
      <Stopwatch/>
      <List/>
    </div>
  );
}

export default App;
