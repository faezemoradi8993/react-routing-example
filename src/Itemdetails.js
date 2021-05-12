import React, { useState, useEffect } from 'react';
import { Router } from 'react-router';
import './Shop.css';
import { Link } from 'react-router-dom';
import style from "./itemdetails.module.css";

function Itemdetails({ match }) {

  const [item, setitem] = useState({
    images: {}
  });

  useEffect(() => {
    fetchitem();
  }, []);

  const fetchitem = async () => {
    const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
    const item = await data.json();
    console.log(item.data.item);

    setitem(item.data.item);

  }
  return (
    <div className={style.shopitem}>
      <h1>id : {match.params.id}</h1>
      <h1>name : {item.name}</h1>
      <h1>description :{item.description}</h1>
      <img src={item.images.icon} />
    </div>
  );
}

export default Itemdetails;
