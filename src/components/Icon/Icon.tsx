import React from 'react';

import './Icon.scss';

type Props = {
  type: string,
};

export const Icon: React.FC<Props> = ({ type }) => {
  return (
    <span
      className={`icon icon--${type}`}
      aria-label={`${type} icon`}
    />
  );
};
