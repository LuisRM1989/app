/* import { render } from '@testing-library/react'; */
import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

/* class Componente extends React.Component{
  constructor() {
    this.state = {
      patito: 'Juan'
    };
  }

  render() {
    return (
      <div onClick={ () => this.setState('Enrique')}>{this.state}</div>
    )
  }
} */


function TodoSearch() {

  const {searchValue, setSearchValue} = React.useContext(TodoContext)

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  /* return (
    <input className="TodoSearch" placeholder="Cebolla" 
    onChange={onSearchValueChange}/>
  ); */
  return (
    <input className="TodoSearch" 
    placeholder="Cebolla" 
    value={searchValue}
    onChange={onSearchValueChange}/>);
}

export { TodoSearch };
