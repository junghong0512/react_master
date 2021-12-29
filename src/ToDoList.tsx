import { useRecoilValue } from "recoil";
import { toDoSelector, toDoState } from "./atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const [toDo, doing, done] = useRecoilValue(toDoSelector);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <h2>To Do</h2>
      <ul>
        {toDo.map((td) => (
          <ToDo key={td.id} {...td} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((td) => (
          <ToDo key={td.id} {...td} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((td) => (
          <ToDo key={td.id} {...td} />
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default ToDoList;
