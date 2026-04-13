import { useFunctionDebouncing } from "../hooks/useDebouncing"


function SearchingPage() {

    const debouncedSearch = useFunctionDebouncing((value) => {
        console.log("API Called: ", value)
    }, 1000)

    return (
        <div>

            <input
                type="text"
                placeholder="Search"
                onChange={(e) => {
                    debouncedSearch(e.target.value)
                }}
            />
        </div>
    )
}

export default SearchingPage