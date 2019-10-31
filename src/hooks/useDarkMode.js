import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

export default (initialValue) =>{
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", initialValue)
    useEffect(()=>{
        document.body.classList.toggle('dark-mode');
    },[darkMode]);
    return[darkMode, setDarkMode]
}