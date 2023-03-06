import React from "react";

/**
 * Imports styles
 */
import { Images } from "./Coin.styled";

/**
 * Imports Types
 */
import { CoinProps } from "./Coin.types";

/**
 * Display the component
 */
export const Coin: React.FC<CoinProps> = (props) => {
  const { coin } = props;

  /**
   * Displays URLs
   */
  const getImgUrl = () => {
    if (coin === "heads") {
      return "https://www.casademonede.ro/uploads/products/3489/big/50-lei-alexandru-ioan-cuza-1996-edi-ie-innobilata-cu-aur-pur-i-rodiu-selec-ionat.png";
    } else {
      return "https://www.casademonede.ro/uploads/products/3489/big/50-lei-alexandru-ioan-cuza-1996-edi-ie-innobilata-cu-aur-pur-i-rodiu-selec-ionat-1.png";
    }
  };

  return (
    <div>
      <Images src={getImgUrl()} alt={coin} />
    </div>
  );
};
