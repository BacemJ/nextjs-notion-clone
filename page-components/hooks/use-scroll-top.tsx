"use client"
import React, {  useEffect } from 'react'

function UseScrollTop(threshold=100) {
    const [scrolled, setScrolled] = React.useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > threshold) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [threshold]);

    return scrolled;
}

export default UseScrollTop;