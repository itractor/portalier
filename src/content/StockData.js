import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

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
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>{items[0].ticker}</th>
                </tr>
                <tr>
                    <th>Year</th>
                    <th>revenue</th>
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
        </Table>
    );
    }
}

export default StockData