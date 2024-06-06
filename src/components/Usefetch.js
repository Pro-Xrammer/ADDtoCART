import { useState, useEffect } from "react";
const Usefetch = (url) => {
    const [data, setData] = useState([]);
    const [error, seterror] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const result = await res.json();
                setData(result);
                console.log(result);
            } catch (error) {
                seterror(error);
            }
        }
        fetchData();
    }, [url])
    return { data };
}
export default Usefetch;

