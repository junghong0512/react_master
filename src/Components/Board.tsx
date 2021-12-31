import { Droppable } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "../atoms";
import DragabbleCard from "./DragabbleCard";

const Wrapper = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

function Board({ toDos, boardId }: IBoardProps) {
  return (
    <Droppable droppableId={boardId}>
      {(magic) => (
        <Wrapper ref={magic.innerRef} {...magic.droppableProps}>
          {toDos.map((todo, index) => (
            <DragabbleCard key={todo} todo={todo} index={index} />
          ))}
          {magic.placeholder}
        </Wrapper>
      )}
    </Droppable>
  );
}

export default Board;
