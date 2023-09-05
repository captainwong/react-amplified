import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { createTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';
import awsExports from './aws-exports';
import { withAuthenticator, WithAuthenticatorProps, Button, Heading, Text, TextField, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports);


const initalState = {
  name: '',
  description: ''
};

const App: React.FC<WithAuthenticatorProps> = ({ signOut, user }) => {
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
    <View className={styles.container}>
      <Heading level={1}>Hello {user?.username}</Heading>
      <Button onClick={signOut}>Sign Out</Button>
      <Heading level={2}>Amplify Todos</Heading>
      <TextField
        label="Name"
        placeholder="Name"
        onChange={event => setInput('name', event.target.value)}
        className={styles.input}
        value={formState.name}
      />
      <TextField
        label="Description"
        placeholder="Description"
        onChange={event => setInput('description', event.target.value)}
        className={styles.input}
        value={formState.description}
      />
      <Button className={styles.button} onClick={addTodo}>Create Todo</Button>
      {
        todos.map((todo, index) => (
          <View key={todo.id ? todo.id : index} className={styles.todo}>
            <Text className={styles.todoName}>{todo.name}</Text>
            <Text className={styles.todoDescription}>{todo.description}</Text>
          </View>
        ))
      }
    </View>
  );
}

export default withAuthenticator(App);
