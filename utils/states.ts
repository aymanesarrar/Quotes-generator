import { atom } from "recoil";

const randomizeState = atom({
  key: "randomize",
  default: false,
});

export { randomizeState };
