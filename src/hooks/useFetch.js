import { useState, useEffect } from "react";

const useFetch = (url, options) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url, options)
            .then(response => response.json())
            .then(data => setData( data));
    }, [])
}
export default useFetch;
