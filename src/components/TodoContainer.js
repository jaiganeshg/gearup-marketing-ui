import React, {useState} from "react";
import InputTodo from "./InputTodo";
import TodoList from "./TodosList";

export default function TodoContainer() {
  const [todos, setTodos] = useState([{id: 0, text: 'Learn Hooks 0' }]);
  const [value, setValue] = useState(1);

  const addToDo = () => {
    setValue(value + 1);
    setTodos( todos => [...todos, {id: value, text: `Learn hooks ${value}` }]);
  };

  return (
    <React.Fragment>
      ABCD
      <InputTodo />
      <TodoList todos={todos} />
      <button onClick={addToDo}>Increment Value</button>
    </React.Fragment>
  );

  // const [value, setValue] = useState(1);
  //   return (
  //       <div>
  //           <p>{value}</p>
  //           <button onClick={() => setValue((value + 1))}>Increment Value</button>
  //       </div>
  //   );
}
