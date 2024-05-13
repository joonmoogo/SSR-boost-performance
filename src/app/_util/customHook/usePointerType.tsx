import { useState, useEffect } from 'react';

function usePointerType() {
    const [pointerType, setPointerType] = useState('unknown');

    useEffect(() => {
        const updatePointerType = () => {
            if (window.matchMedia("(pointer: coarse)").matches) {
                setPointerType('coarse');
            } else if (window.matchMedia("(pointer: fine)").matches) {
                setPointerType('fine');
            } else {
                setPointerType('unknown');
            }

        };
        updatePointerType();
    }, []);

    return pointerType;
}


export default usePointerType;
