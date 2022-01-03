import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Droppable } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { ITodo, toDoState } from "../atoms";
import DragabbleCard from "./DragabbleCard";

const Wrapper = styled.div`
  width: 300px;
  padding-top: 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

interface IAreaProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}

const Area = styled.div<IAreaProps>`
  padding: 20px;
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#dfe6e9"
      : props.isDraggingFromThis
      ? "#b2bec3"
      : "transparent"};
  flex-grow: 1;
  transition: background-color 0.5s ease-in-out;
`;

interface IBoardProps {
  toDos: ITodo[];
  boardId: string;
}

const Form = styled.form`
  width: 100%;
  input {
    width: 100%;
  }
`;

interface IForm {
  toDo: string;
}

function Board({ toDos, boardId }: IBoardProps) {
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const onValid = (data: IForm) => {
    console.log(data);
    setValue("toDo", "");
  };
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", { required: true })}
          type="text"
          placeholder={`Add Task on ${boardId}`}
        />
      </Form>
      <Droppable droppableId={boardId}>
        {(magic, info) => (
          <Area
            isDraggingOver={info.isDraggingOver}
            isDraggingFromThis={Boolean(info.draggingFromThisWith)}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos.map((todo, index) => (
              <DragabbleCard
                key={todo.id}
                index={index}
                toDoId={todo.id}
                toDoText={todo.text}
              />
            ))}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
