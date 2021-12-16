import { useState } from 'react';


export const useSetNav = () => {
    const [nav, setNav] = useState('home')
    return {nav, setNav}
}
