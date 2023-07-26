import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (todoId: string) => void }> = props => {
  return (
    <ul className={classes.todos}>
      {props.items.map(item => (
        <div>
          <TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} />
        </div>
      ))}
    </ul>
  );
};

export default Todos;