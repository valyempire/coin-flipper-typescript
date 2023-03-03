import { useState } from 'react';

/**
 * Imports component
 */
import { Coin } from '../Coin/Coin';

/**
 * Gets utility
 */
import { useUtils } from '../../hooks';
import { ChoiceFace } from './CoinContainer.types';

/**
 * Display the component
 */
export const CoinContainer: React.FC = () => {
  /**
   * Initializes the state
   */
  const [currCoin, setCurrCoin] = useState<ChoiceFace>();
  const [nFlips, setNflips] = useState(0);
  const [nHeads, setNheads] = useState(0);
  const [nTails, setNtails] = useState(0);
  const { choice } = useUtils();

  /**
   * Chooses a random face
   */
  const flipCoin = () => {
    const newCoin = choice(['heads', 'tails']);
    setCurrCoin(newCoin);
    setNflips(nFlips + 1);
    setNheads(nHeads + (newCoin === 'heads' ? 1 : 0));
    setNtails(nTails + (newCoin === 'tails' ? 1 : 0));
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    flipCoin();
  };

  return (
    <div className="CoinContainer">
      <h2>Let's Flip A Coin!</h2>
      {currCoin && <Coin coin={currCoin} />}
      <button onClick={handleClick}>Flip Me!</button>
      <p>
        Out of {nFlips} flips, there have been {nHeads} heads and {nTails}{' '}
        tails.
      </p>
    </div>
  );
};
