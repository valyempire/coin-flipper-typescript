/**
 * Imports types
 */
import { ChoiceFace } from "../../components/CoinContainer/CoinContainer.types";

/**
 * Gets general utils
 */
export const useUtils = () => {
  /**
   * Return a random item from a list
   */
  const choice = (arr: ChoiceFace[]) => {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  };
  return { choice };
};
