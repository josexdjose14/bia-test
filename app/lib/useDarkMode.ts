import { useEffect, useState } from 'react';

export function useDarkMode() {
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
        const root = window.document.documentElement;
        const initialDark = localStorage.getItem('theme') === 'dark';
        setIsDark(initialDark);
        if (initialDark) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, []);
    const toggle = () => {
        const root = window.document.documentElement;
        const newMode = !isDark;
        if (newMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            console.log("changing theme to dark");
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            console.log("changing theme to light");
        }
        setIsDark(newMode);
    };
    return { isDark, toggle };
}