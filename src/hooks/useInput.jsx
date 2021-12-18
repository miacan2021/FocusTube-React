import { useState } from 'react';
import { useSetNav } from './useSetNav';

export const useInput = () => {
    const [inputVal, setInputVal] = useState('1-HOUR')
    const {nav, setNav} = useSetNav()

    const handleInput = (e) => {
        e.preventDefault()
        setInputVal(e.target[0].value)
        setNav('home')
        e.target[0].value = ''
        }

    return {inputVal, handleInput, nav, setNav}
}

