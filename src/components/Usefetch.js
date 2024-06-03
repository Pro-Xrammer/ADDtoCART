import { useState, useEffect } from "react";
const Usefetch = (url) => {
    const [data, setData] = useState([]);
    const [error, seterror] = useState(null);
    const [count, setcount] = useState(0);
    const handleclick = () => {
        setcount(count + 1);
    }
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
    return { data, error, count, handleclick };
}
export default Usefetch;

