import { useEffect, useState } from "react";

function Dependency() {

    const [user, setUser] = useState('')
    const [userId, setUserId] = useState(1)

    useEffect(() => {

        let canceled: boolean = false

        fetch(`https://dummyjson.com/users/${userId}`)
            .then(res => {
                if (!canceled) {
                    return res.json()
                }
            })
            .then(user => setUser(`${user.firstName} ${user.maidenName} ${user.lastName}`))

        return () => {
            canceled = true
        };
    }, [userId])

    return (
        <div>
            <input
                type="number"
                onChange={(e) => {
                    setUserId(Number(e.target.value))
                }}
            />
            <h2>UserId : {userId}</h2>
            <h2>User: {user}</h2>
        </div>)
}

export default Dependency;