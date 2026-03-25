import { useEffect, useState } from "react";
import { useDebouncing } from "../hooks/useDebouncing";
import { useFetch } from "../hooks/useFetch";
import { NavContext } from "./NavContext";

export const NavProvider = ({ children }) => {

    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('');
    const [sortBy, setSortBy] = useState('')
    const [type, setType] = useState('asc')
    const [query, setQuery] = useState('')
    const DebounceQuery = useDebouncing(query, 500)

    const { data: categoriesData } = useFetch("https://dummyjson.com/products/category-list");
    const categories = categoriesData || [];

    useEffect(() => {
        setSearch(DebounceQuery)
    }, [DebounceQuery])

    function handleCategory(e) {
        setCategory(e.target.value)
        console.log(category)
    }

    function handleType(e) {
        setType(e.target.value.split('-')[1])
        setSortBy(e.target.value.split('-')[0])
    }

    function handleChange(e) {
        setQuery(e.target.value)
    }

    return (
        <NavContext.Provider
            value = {{
                search,
                category,
                sortBy,
                type,
                query,
                categories,
                handleCategory,
                handleType,
                handleChange
            }}
        >
            {children}
        </NavContext.Provider>
    )
}