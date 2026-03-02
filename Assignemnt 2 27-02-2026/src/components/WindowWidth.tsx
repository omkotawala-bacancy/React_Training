import { useEffect, useState } from "react";

function WindowWidth() {

    const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0)

    useEffect(() => {

        function resizeHandle() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', resizeHandle)

        return () => {
            window.removeEventListener('resize', resizeHandle)
        }
    }, [])

    return <div>
        <p>Window width: <strong>{width}px</strong></p>
        <small>Resize the window to see it update. Unmount to remove the listener.</small>
    </div>

}

export default WindowWidth;