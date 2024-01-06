import React from 'react';

const CustomBlock = ({ value, onChange }:any) => {
  const handleContentChange = (event:any) => {
    const newValue = event.target.value;
    onChange(newValue);
  };

  return (
    <div>
      <h3 style={{ color: 'green' }}>This is a Custom Block with Green Text</h3>
      {/* Editable text area */}
      <textarea
        value={value}
        onChange={handleContentChange}
        style={{ color: 'green', minHeight: '100px', border: '1px solid #ccc', padding: '8px' }}
      />
    </div>
  );
};

export default CustomBlock;
