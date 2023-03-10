import React, { useState } from "react";

export const FavoriteNumber = ({ min = 1, max = 9 }) => {
  const [number, setNumbeer] = useState(0);
  const [numberEntered, setNumberEntered] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setNumbeer(Number(e.target.value));
    setNumberEntered(true);
  };

  const isValid = !numberEntered || (number >= min && number <= max);

  return (
    <div>
      <label htmlFor="favorite-number">Favorite Number</label>
      <input
        id="favorite-number"
        type="number"
        value={number}
        onChange={handleChange}
      />
      {isValid ? null : <div role="alert">The number is invalid</div>}
    </div>
  );
};


