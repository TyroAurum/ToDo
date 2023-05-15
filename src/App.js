import Task from './jsx/task';
import './App.css';
import { Button, Input, Form } from 'reactstrap';
import { useState } from 'react';

function App() {
const [inputValues,setInputValues] = useState([]);
const [formValues,setFormValues] = useState({task:""});


const handleChange = (e)=>{
  const{name,value} = e.target;
  setFormValues({...formValues,[name]:value});
  console.log(formValues)
}

const handleSubmit = (e)=>{
  e.preventDefault();
  setInputValues(inputValues=>[...inputValues,formValues.task])
  setFormValues({task:""})
}

  return (<div className='main-todo'>
    <div className="App">
      <div className='input-sec'>
      <header>My To Do List</header>
      <Form onSubmit={handleSubmit}>
      <Input type='text' placeholder='Enter the task..' name='task' onChange={handleChange} value={formValues.task}/><Button type='submit'>Add</Button>
      </Form>
      </div>
      <div className='tasklist'>
        {inputValues.map((value,index)=>(<Task key={index} task={value} />))}
      </div>
    </div>
    </div>
  );
}

export default App;
