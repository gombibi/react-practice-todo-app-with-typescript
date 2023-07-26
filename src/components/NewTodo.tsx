import React, { useRef } from 'react';
import classes from './NewTodo.module.css';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = props => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // ? : 일단 접근해보고 값이 있으면 가져와라(null 일수도)
    // ! : 이 시점에는 100% 접근이 가능하고 절대 null이 아니다.
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label className={classes.label} htmlFor='text'>
        Todo Text
      </label>
      <input className={classes.input} type='text' id='text' ref={todoTextInputRef} />
      <button className={classes.button}>Add Todo</button>
    </form>
  );
};

export default NewTodo;
