import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { scale: 1.1, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
  drag: { backgroundColor: "rgb(46, 204, 113)", transition: { duration: 3 } },
};

function App() {
  const x = useMotionValue(0);
  const customOpacity = useTransform(x, [-800, 0, 800], [1, 0.5, 0.01]);
  const customScale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);

  useEffect(() => {
    // x.onChange(() => console.log(x.get()));
    customScale.onChange(() => console.log(customScale.get()));
  }, [x]);

  return (
    <Wrapper>
      <Box
        style={{ x, scale: customScale, opacity: customOpacity }}
        drag="x"
        dragSnapToOrigin
      />
    </Wrapper>
  );
}

export default App;
