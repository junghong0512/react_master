import { IToDo } from "./atoms";

function ToDo({ id, text, category }: IToDo) {
  return (
    <li>
      <span>{text} </span>
      <button>Doing</button>
      <button>To Do</button>
      <button>Done</button>
    </li>
  );
}

export default ToDo;
