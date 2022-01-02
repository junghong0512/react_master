import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
  padding: 10px 10px;
  background-color: ${(props) =>
    props.isDragging ? "#74b9ff" : props.theme.cardColor};
  border-radius: 5px;
  margin-bottom: 5px;
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.5)" : ""};
`;

interface IDragabbleCardProps {
  todo: string;
  index: number;
}

function DragabbleCard({ todo, index }: IDragabbleCardProps) {
  return (
    <Draggable draggableId={todo} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          {todo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DragabbleCard);
