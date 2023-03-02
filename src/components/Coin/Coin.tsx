import React from "react";
import "./Coin.css";
import { CoinProps } from "./Coin.types";

export const Coin: React.FC<CoinProps> = (props) => {
  const { coin } = props;

  const getImgUrl = () => {
    if (coin === "heads") {
      return "https://www.casademonede.ro/uploads/products/3489/big/50-lei-alexandru-ioan-cuza-1996-edi-ie-innobilata-cu-aur-pur-i-rodiu-selec-ionat.png";
    } else {
      return "https://www.casademonede.ro/uploads/products/3489/big/50-lei-alexandru-ioan-cuza-1996-edi-ie-innobilata-cu-aur-pur-i-rodiu-selec-ionat-1.png";
    }
  };

  return (
    <div className="Coin">
      <img src={getImgUrl()} alt={coin} />
    </div>
  );
};
