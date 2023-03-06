import { useState } from "react";

/**
 * Imports components
 */
import { Coin } from "../Coin";

/**
 * Imports hooks
 */
import { useUtils } from "../../hooks";

/**
 * Imports types
 */
import { ChoiceFace } from "./CoinContainer.types";

/**
 * Display the component
 */
export const CoinContainer: React.FC = () => {
  /**
   * Initializes the state
   */
  const [currentCoin, setCurrentCoin] = useState<ChoiceFace>();
  const [numOfFlips, setNumOfFlips] = useState(0);
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);
  const { choice } = useUtils();

  /**
   * Chooses a random face
   */
  const flipCoin = () => {
    const newCoin = choice(["heads", "tails"]);
    setCurrentCoin(newCoin);
    setNumOfFlips(numOfFlips + 1);
    setHeadsCount(headsCount + (newCoin === "heads" ? 1 : 0));
    setTailsCount(tailsCount + (newCoin === "tails" ? 1 : 0));
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    flipCoin();
  };

  return (
    <div className="CoinContainer">
      <h2>Let's Flip A Coin!</h2>
      {currentCoin && <Coin coin={currentCoin} />}
      <button onClick={handleClick}>Flip Me!</button>
      <p>
        Out of {numOfFlips} flips, there have been {headsCount} heads and{" "}
        {tailsCount} tails.
      </p>
    </div>
  );
};
