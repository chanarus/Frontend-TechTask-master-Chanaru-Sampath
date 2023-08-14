import React, { useState } from 'react';

import { Operation } from '../../types';
import './style.css';

interface QuantifierProps {
  removeProductCallback: (productId: string) => void;
  handleUpdateQuantity: (productId: string, operation: Operation) => void;
  productId: string;
}

const Quantifier = ({
  productId,
  handleUpdateQuantity,
  removeProductCallback,
}: QuantifierProps) => {
  const [value, setValue] = useState<number>(1);

  const reduce = (): void => {
    handleUpdateQuantity(productId, 'decrease');

    setValue((prevState) => {
      const updatedValue = prevState - 1;
      if (updatedValue === 0) {
        removeProductCallback(productId);
      }
      return updatedValue;
    });
  };

  const increase = (): void => {
    handleUpdateQuantity(productId, 'increase');
    setValue((prevState) => prevState + 1);
  };

  return (
    <div className={'quantifier'}>
      <input type="button" value="-" onClick={reduce} />
      <input
        type="number"
        step="1"
        max=""
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <input type="button" value="+" onClick={increase} />
    </div>
  );
};

export default Quantifier;
