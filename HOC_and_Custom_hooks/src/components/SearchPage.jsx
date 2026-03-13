import { useEffect, useState } from "react";
import { useDebouncing } from "../hooks/useDebouncing";

export default function SearchPage() {

    const [query, setQuery] = useState('')
    const debounceQuery = useDebouncing(query, 500)

    useEffect(() => {

        if (debounceQuery) {
            console.log(debounceQuery)
        }
    }, [debounceQuery])

    return (
        <div>
            <input
                type="text"
                placeholder="Search"
                onChange={(e) => {
                    setQuery(e.target.value)
                }}
            />
            <h1>{debounceQuery}</h1>
        </div>
    )
}