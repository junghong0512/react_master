import { atom, selector } from "recoil";

interface IToDoState {
  [key: string]: ITodo[];
}

export interface ITodo {
  id: number;
  text: string;
}
