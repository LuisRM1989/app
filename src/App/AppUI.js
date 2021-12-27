import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext'
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';


import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';

/* {
  loading,
  error,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
} */

function AppUI() {
  const { error,
    loading,
    searchedTodos,
    completeTodo,
    openModal,
    setOpenModal,
    deleteTodo } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <TodosError error={error}></TodosError>}
        {loading && <TodosLoading/>}
        {!loading && !searchedTodos.length && <EmptyTodos/>}
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal> 
          <TodoForm/>
        </Modal>
      )}
      <CreateTodoButton 
        setOpenModal= {setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };