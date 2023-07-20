import React, { useState } from 'react';
import Form from './components/Form'
import List from './components/List';

function App() {
  const [tasks, setTask] = useState([])

  return (
    <div className="App">
      <Form/>
      <List/>
    </div>
  );
}

export default App;
