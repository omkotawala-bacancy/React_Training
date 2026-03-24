import { useEffect, useState } from "react"

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