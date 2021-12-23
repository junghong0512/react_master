import styled from "styled-components";
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle bgColor="teal" /> 
      <Circle bgColor="tomato" borderColor="blue" text="test text" />
    </div>
  );
}

export default App;
