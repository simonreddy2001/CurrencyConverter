import { useEffect, useState } from "react";

const defaultCurrency = "USD";

const CurrencyConverterApp = () => {
    const [selectedCurrency, setSelectedCurrency] = useState(defaultCurrency);
    const [convertedCurrency, setConvertedCurrency] = useState(0);

    useEffect(() => {
        fetch(`https://open.er-api.com/v6/latest/${selectedCurrency}`)
            .then((response) => response.json())
            .then((result) => {
                setConvertedCurrency(result.rates.DKK);
            });
    }, [selectedCurrency]);

    return (
        <div>
            <select onChange={(event) => setSelectedCurrency(event.target.value)}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CHF">CHF</option>
            </select>
            <h1>
                1 {selectedCurrency} = {convertedCurrency} DKK
            </h1>
        </div>
    );
};

export default CurrencyConverterApp;