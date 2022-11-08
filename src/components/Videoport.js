import React, { useEffect, useRef, useState } from 'react'

import { useMemo } from 'react';

function Videoport(options,targerRef) {
    const [View, setView] = useState(false);
    const callback = entries => {
        const [entery] = entries;
        setView(entery.isIntersecting);
    }
    const optionsMemo = useMemo(() => {
        return options
    }, [options]);
    useEffect(() => {
        const observer = new IntersectionObserver(callback, optionsMemo);
        const currentTarget = targerRef.current;
        if (currentTarget) observer.observe(currentTarget);

        return () => {
            if (currentTarget) observer.unobserve(currentTarget);
        }
    }, [targerRef, optionsMemo])
    return View;
   
}

export default Videoport