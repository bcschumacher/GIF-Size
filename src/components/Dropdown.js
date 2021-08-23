import React from 'react';
import Select from 'react-select';

const options = [
        { value: 'smallest to largest', label: 'smallest to largest' },
        { value: 'slargest to smallest', label: 'largest to smallest' },
        { value: 'relevant', label: 'relevant' }
    ]
  
    const Dropdown = () => (
        <Select placeholder="Sort" options={options} />
    )

export default Dropdown;