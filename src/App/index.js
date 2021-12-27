import React from 'react';
import { AppUI } from './AppUI';
import {TodoProvider} from '../TodoContext'

/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'LALALALAA', completed: false },
]; */

function App() {
  
 /*  console.log('Render (antes del use Effects)');

  React.useEffect(() => {
    console.log('use effect');
  }, [totalTodos]);

  console.log('Render (luego del use Effects)'); */
  
  return (
    <TodoProvider>    
      <AppUI />
    </TodoProvider>
  );
}

export default App;
