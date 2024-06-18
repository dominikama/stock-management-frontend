import React from 'react';
import Select from 'react-select';

const CustomSelect = ({ id, label, name, value, onChange, options, className }) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <Select
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        options={options}
        className="react-select-container bg-gray-50"
        classNamePrefix="react-select"
        required
      />
    </div>
  );
};

export default CustomSelect;
