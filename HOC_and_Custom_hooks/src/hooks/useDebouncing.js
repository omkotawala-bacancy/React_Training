import { useEffect, useRef, useState } from "react"

export const useDebouncing = (value, delay = 500) => {

    const [debounceValue, setDebouncValue] = useState(value)

    useEffect(() => {

        const timer = setTimeout(() => {
            setDebouncValue(value)
        }, delay)

        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])

    return debounceValue;
}

export const useFunctionDebouncing = (fn, delay) => {

    let timer = useRef(null)

    const debouncedfn = function (...args) {

        clearTimeout(timer.current)

        timer.current = setTimeout(() => {
            fn(...args)
        }, delay);
    }

    return debouncedfn
}