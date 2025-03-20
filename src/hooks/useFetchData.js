import {useEffect, useState} from "react";

const useFetchData = (fetchUrl, updateInterval = 0) => {
    const [isFirstLoading, setIsFirstLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch(fetchUrl);
            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.errorMessage);
                return;
            }
            const data = await response.json();
            setData(data);
            setError(null);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsFirstLoading(false);
        }
    };

    useEffect(() => {
        void fetchData();
        if (updateInterval > 0) {
            const intervalId = setInterval(fetchData, updateInterval);
            return () => clearInterval(intervalId);
        }
    }, [fetchUrl, updateInterval]);

    return {data, isFirstLoading, error}
}

export default useFetchData;