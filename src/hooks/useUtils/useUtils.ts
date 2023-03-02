import { ChoiceFace } from "../../components/CoinContainer/CoinContainer.types";
export const useUtils = () => {
  const choice = (arr: ChoiceFace[]) => {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  };
  return { choice };
};
