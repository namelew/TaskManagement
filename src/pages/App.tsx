import React /*,{ useState }*/ from 'react';
import Form from '../components/Form'
import List from '../components/List';
import style from './App.module.scss';

function App() {
  //const [tasks, setTask] = useState([])

  return (
    <div className={style.AppStyle}>
      <Form/>
      <List/>
    </div>
  );
}

export default App;
