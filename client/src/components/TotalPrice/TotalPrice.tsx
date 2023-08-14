import React from 'react';

import { formatter } from '../../helpers/utils';
import './style.css';

interface TotalPriceProps {
  amount: number;
}

const TotalPrice = ({ amount }: TotalPriceProps) => {
  return <div className={'totalPrice'}>Total: {formatter.format(amount)}</div>;
};

export default TotalPrice;
