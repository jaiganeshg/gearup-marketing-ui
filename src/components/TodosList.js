export default function TodoList(props) {
  return (
    // <h1> Hello </h1>
    <ul>
      SVGFEDisplacementMapElement
      {props.todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
