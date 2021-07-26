import React from 'react';

type Props = {
  label: string;
};

const Button = ({label}: Props) => (
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
    {label}
  </button>
);

export default Button;
