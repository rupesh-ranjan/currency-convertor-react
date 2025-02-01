import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data[currency]));
    }, [currency]);
    // console.log(data);
    return data;
}

export default useCurrencyInfo;
