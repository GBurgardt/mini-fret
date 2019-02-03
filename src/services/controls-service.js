import { createElementFromHTML } from './utils-service'

export const handleKeyPressed = (e) => e && e.keyCode && 
    (
        e.keyCode === 49 ||
        e.keyCode === 50 ||
        e.keyCode === 51 ||
        e.keyCode === 52 ||
        e.keyCode === 53
    ) ? 'pressed' : '';
