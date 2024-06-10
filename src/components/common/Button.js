import React from 'react';

const Button = ({ onClick, children, className, ...props }) => {
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
