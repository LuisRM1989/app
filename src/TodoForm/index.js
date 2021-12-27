import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {
    const[newTodoValue, setNewTodoValue] = React.useState('');

    const { addTodo, setOpenModal} = React.useContext(TodoContext);

    const onChange = (evento) => {
        setNewTodoValue(evento.target.value);
    };

    const onCancel = () => {
        //TODO
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Ingrese nuevo TODO</label>
            </div>
            <div>
                <textarea 
                value = {newTodoValue}
                onChange={onChange}
                placeholder="Cortar la Cebolla para el almuerzo" />
            </div>
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >Cancelar</button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };