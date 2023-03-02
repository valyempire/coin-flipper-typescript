import { ChoiceFace } from "../CoinContainer/CoinContainer.types";

export const choice = (arr: ChoiceFace[]) => {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};
