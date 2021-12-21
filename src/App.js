import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Emogi = styled.span`
  font-size: 50px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 5s linear infinite;
  ${Emogi} {
    &:hover {
      font-size: 100px;
    }
    &:active {
      opacity: 0.5;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emogi as="p">🧷</Emogi>
      </Box>
    </Wrapper>
  );
}

export default App;
