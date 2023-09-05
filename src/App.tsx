import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { createTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

const initalState = {
  name: '',
  description: ''
};

const App = () => {
  const [formState, setFormState] = useState(initalState);
  const [todos, setTodos] = useState<any[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return;
      const todo = { ...formState };
      setTodos([...todos, todo]);
      setFormState(initalState);
      await API.graphql(graphqlOperation(createTodo, { input: todo }));
    } catch (err) {
      console.error('error creating todo:', err);
    }
  }
  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos)) as any;
      const todos = todoData.data.listTodos.items; // fix this error
      setTodos(todos);
    } catch (err) {
      console.error('error fetching todos');
    }
  }

  function setInput(key: string, value: string) {
    setFormState({ ...formState, [key]: value });
  }

  return (
    <div className={styles.container}>
      <h2>Amplify Todos</h2>
      <input
        onChange={event => setInput('name', event.target.value)}
        className={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={event => setInput('description', event.target.value)}
        className={styles.input}
        value={formState.description}
        placeholder="Description"
      />
      <button className={styles.button} onClick={addTodo}>Create Todo</button>
      {
        todos.map((todo, index) => (
          <div key={todo.id ? todo.id : index} className={styles.todo}>
            <p className={styles.todoName}>{todo.name}</p>
            <p className={styles.todoDescription}>{todo.description}</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;
