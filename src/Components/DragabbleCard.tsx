import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  padding: 10px 10px;
  background-color: ${(props) => props.theme.cardColor};
  border-radius: 5px;
  margin-bottom: 5px;
`;

interface IDragabbleCardProps {
  todo: string;
  index: number;
}

function DragabbleCard({ todo, index }: IDragabbleCardProps) {
  return (
    <Draggable draggableId={todo} index={index}>
      {(magic) => (
        <Card
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
