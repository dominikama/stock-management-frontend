import React from 'react';

const Checkbox = ({ id, label, checked, onChange, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange({ target: { name: id, value: e.target.checked, type: 'checkbox' } })}
        className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label htmlFor={id} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
