import React, { useState, useEffect } from 'react';

function StockData() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/stock/MOWI")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
    }, [])

    if (error) {
    return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
    return <div>Loading...</div>;
    } else {
    return (
        <table>
            <thead>
                <tr>
                    <th>{items[0].ticker}</th>
                </tr>
                <tr>
                    <th>{items[0].reportyear.key}</th>
                    <th>{items[0].reportyear.key}</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                <tr key={item.id}>
                    <td>{item.reportyear}</td>
                    <td>{item.revenue}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
    }
}

export default StockData