import React, { useState, useEffect } from 'react';
import { Router } from 'react-router';
import './Shop.css';
import { Link } from 'react-router-dom';


function Shop() {
    useEffect(() => {
        fetchitems();
    }, []);
    const [items, setitems] = useState([]);
    const fetchitems = async () => {
        const data = await fetch("https://fortnite-api.theapinetwork.com/upcoming/get");
        const items = await data.json();
        setitems(items.data);
    }
    return (
        <div className="shoplinks">
            {items.map(x => (
                <Link to={`/shop/${x.itemId}`}>
                    <h1 className="shoplink" key={x.itemId}>{x.item.name}</h1>
                </Link>
            ))}
        </div>
    );
}

export default Shop;
