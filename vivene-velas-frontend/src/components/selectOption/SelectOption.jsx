import React from 'react';

const SelectComponent = ({ options }) => {
  return (
    <select>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectComponent;