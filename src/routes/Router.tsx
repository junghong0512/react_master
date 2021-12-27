import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from "./Coin";
import Coins from "./Coins";

interface IRouterProps {
  isDark: boolean;
  toggleDark: () => void;
}

function Router({ isDark, toggleDark }: IRouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins toggleDark={toggleDark} />}></Route>
        <Route path="/:coinId/*" element={<Coin isDark={isDark} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
