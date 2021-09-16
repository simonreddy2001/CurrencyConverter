import { useEffect, useState } from "react";

const defaultCurrency = "USD";
const defaultChangingCurrency = "DKK";
const CurrencyConverterApp = () => {
    const [selectedCurrency, setSelectedCurrency] = useState(defaultCurrency);
    const [selectedChangingCurrency, setSelectedChangingCurrency] = useState(defaultChangingCurrency);
    const [convertedCurrency, setConvertedCurrency] = useState(0);

    useEffect(() => {
        fetch(`https://open.er-api.com/v6/latest/${selectedCurrency}`)
            .then((response) => response.json())
            .then((result) => {
                setConvertedCurrency(result.rates[selectedChangingCurrency]);
            });
    }, [selectedCurrency, selectedChangingCurrency]);

    return (
        <div>
            <select onChange={(event) => setSelectedCurrency(event.target.value)}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CHF">CHF</option>
                <option value="DKK">DKK</option>
            </select>
            <select onChange={(event) => setSelectedChangingCurrency(event.target.value)}>
                <option value="DKK">DKK</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CHF">CHF</option>
            </select>
            <h1>
                1 {selectedCurrency} = {convertedCurrency} {selectedChangingCurrency}
            </h1>
        </div>
    );
};

export default CurrencyConverterApp;