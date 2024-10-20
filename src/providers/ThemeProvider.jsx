"use client"

import React, { useEffect, useState } from 'react'
import { ThemeContext } from '@/components/context/ThemeContext';
import { useContext } from 'react';

export const ThemeProvider = ({ children }) => {
    const { theme } = useContext(ThemeContext);
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true);
    }, []);

    if(mounted){
        return (
            <div className={theme}>{children}</div>
        )
    }    
}
