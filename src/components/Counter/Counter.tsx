import React from 'react';

import './Counter.scss';

type Props = {
  quantity: number;
};

export const Counter: React.FC<Props> = ({ quantity }) => {
  return (
    quantity > 0 ? (
      <span className="counter">
        {quantity}
      </span>
    ) : (
      <></>
    )
  );
};
