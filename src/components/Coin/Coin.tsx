import React from 'react';

/**
 * Import styles
 */
import { Container } from './Coin.styled';

/**
 * Import Types
 */
import { CoinProps } from './Coin.types';

/**
 * Display the component
 */
export const Coin: React.FC<CoinProps> = (props) => {
  const { coin } = props;

  /**
   * Displays URLs
   */
  const getImgUrl = () => {
    if (coin === 'heads') {
      return 'https://www.bankingnews.ro/wp-content/uploads/2015/06/50bani.png';
    } else {
      return 'https://www.bankingnews.ro/wp-content/uploads/2015/06/50-bani.png';
    }
  };

  return (
    <Container>
      <img src={getImgUrl()} alt={coin} />
    </Container>
  );
};
