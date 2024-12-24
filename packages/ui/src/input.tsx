import React, { useState } from 'react';

const useInput = () => {
    const [value, setValue] = useState();
    const onChange = (e) => {
        setValue(e.target.value);
    }

    return { value, onChange };
}

export function Input({ className }) {
    
    const {value, onChange} = useInput();

    return (
        <>
            <input className={className} value={value} onChange={onChange}  />
        </>
    );
}