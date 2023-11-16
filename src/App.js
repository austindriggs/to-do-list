import React, { useState, useRef } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {

  const [todos, setTodos] = useState([]);
  const taskInputRef = useRef();

  const addTodo = () => {
    const task = taskInputRef.current.value;
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      taskInputRef.current.value = '';
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (

    <div style={{ textAlign: 'center', backgroundColor: 'grey', minHeight: '100vh', padding: '20px' }}>

      <h1>To Do List</h1><br/>

      <div className="input-container">
        <FloatingLabel controlId="taskInput" label="Enter task" style={{ width: '90%', display: 'inline-block' }}>
          <Form.Control type="text" ref={taskInputRef} />
        </FloatingLabel>
        <br/><br/>
        <Button 
          variant="primary" 
          onClick={addTodo}  
          style={{color: 'black', width: '50%'}} 
          onMouseOver={(e) => {
            e.target.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.target.style.color = 'initial';
          }}
        >
          Add
        </Button>
        <br/><br/>
      </div>

      <ListGroup style={{ width: '90%', display: 'inline-block' }}>
        
        {todos.map((todo, index) => (
          
          <ListGroup.Item
            key={index}
            className={index % 2 === 0 ? 'even' : 'odd'}
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: index % 2 === 0 ? '#c58efd' : '#a0fbf8', // Wanted specific colors for these: https://html-color.codes/
              transition: 'background-color 0.5s, color 0.1s', // Smoother transition for colors
            }}
            onMouseOver={(e) => {
              e.target.style.color = '#fff';
              e.target.style.backgroundColor = index % 2 === 0 ? '#ae92ca' : '#92cac8';
            }}
            onMouseOut={(e) => {
              e.target.style.color = 'initial';
              e.target.style.backgroundColor = index % 2 === 0 ? '#c58efd' : '#a0fbf8';
            }}
          >

            <input
              onClick={(e) => {
                removeTodo(index);
              }}
              type="checkbox"
              style={{ marginRight: '10px', cursor: 'pointer' }}
            />

            {todo}

          </ListGroup.Item>

        ))}

      </ListGroup>

    </div>

  );

}

export default App;
