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
  height: 150vh;
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
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const boxVariants = {
  hover: { scale: 1.1, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
  drag: { backgroundColor: "rgb(46, 204, 113)", transition: { duration: 3 } },
};

const Svg = styled.svg`
  width: 180px;
  height: 180px;
  path {
    stroke: white;
    stroke-width: 5;
  }
`;

const svg = {
  start: { pathLength: 0, fill: "rgba(255, 255, 255, 0)" },
  end: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
    // transition: { duration: 3 },
  },
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
      >
        <Svg
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          <motion.path
            variants={svg}
            initial="start"
            animate="end"
            transition={{
              default: { duration: 10 },
              fill: { duration: 2, delay: 4 },
            }}
            d="M512.509 192.001c-16.373-.064-32.03 2.955-46.436 8.495l-77.68-125.153A24 24 0 0 0 368.001 64h-64c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h50.649l14.896 24H256.002v-16c0-8.837-7.163-16-16-16h-87.459c-13.441 0-24.777 10.999-24.536 24.437.232 13.044 10.876 23.563 23.995 23.563h48.726l-29.417 47.52c-13.433-4.83-27.904-7.483-42.992-7.52C58.094 191.83.412 249.012.002 319.236-.413 390.279 57.055 448 128.002 448c59.642 0 109.758-40.793 123.967-96h52.033a24 24 0 0 0 20.406-11.367L410.37 201.77l14.938 24.067c-25.455 23.448-41.385 57.081-41.307 94.437.145 68.833 57.899 127.051 126.729 127.719 70.606.685 128.181-55.803 129.255-125.996 1.086-70.941-56.526-129.72-127.476-129.996zM186.75 265.772c9.727 10.529 16.673 23.661 19.642 38.228h-43.306l23.664-38.228zM128.002 400c-44.112 0-80-35.888-80-80s35.888-80 80-80c5.869 0 11.586.653 17.099 1.859l-45.505 73.509C89.715 331.327 101.213 352 120.002 352h81.3c-12.37 28.225-40.562 48-73.3 48zm162.63-96h-35.624c-3.96-31.756-19.556-59.894-42.383-80.026L237.371 184h127.547l-74.286 120zm217.057 95.886c-41.036-2.165-74.049-35.692-75.627-76.755-.812-21.121 6.633-40.518 19.335-55.263l44.433 71.586c4.66 7.508 14.524 9.816 22.032 5.156l13.594-8.437c7.508-4.66 9.817-14.524 5.156-22.032l-44.468-71.643a79.901 79.901 0 0 1 19.858-2.497c44.112 0 80 35.888 80 80-.001 45.54-38.252 82.316-84.313 79.885z"
          ></motion.path>
        </Svg>
      </Box>
    </Wrapper>
  );
}

export default App;
