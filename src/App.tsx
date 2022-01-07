import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useEffect, useRef } from "react";

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
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
  const customRotate = useTransform(x, [-800, 800], [-360, 360]);
  const customGradient = useTransform(
    x,
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(0, 238, 238), rgb(89, 170, 159))",
      "linear-gradient(135deg, rgb(120, 110, 160), rgb(23, 109, 180))",
    ]
  );

  const { scrollY, scrollYProgress } = useViewportScroll();
  const scrollScale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  useEffect(() => {
    // x.onChange(() => console.log(x.get()));
    // customScale.onChange(() => console.log(customScale.get()));
    scrollY.onChange(() => console.log(scrollY.get(), scrollYProgress.get()));
  }, [scrollY, scrollYProgress]);

  return (
    <Wrapper style={{ background: customGradient }}>
      <Box
        style={{
          x,
          opacity: customOpacity,
          rotateZ: customRotate,
          // scale: customScale,
          // scale: scrollYProgress,
          scale: scrollScale,
        }}
        drag="x"
        dragSnapToOrigin
      />
    </Wrapper>
  );
}

export default App;
