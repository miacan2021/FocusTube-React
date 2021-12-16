import { useState } from 'react';

export const useInput = () => {
    const [inputVal, setInputVal] = useState('tokyo')

    const handleInput = (e) => {
        e.preventDefault()
        setInputVal(e.target[0].value)
        e.target[0].value = ''
        }

    return {inputVal, handleInput}
}

