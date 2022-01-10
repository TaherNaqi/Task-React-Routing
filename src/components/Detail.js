import React from "react";
import { useParams } from "react-router-dom";
import products from "../products";
import { useEffect } from "react";
function Detail() {
  const { slug } = useParams();

  let cookie = products.find((p) => p.slug === slug);
  useEffect(() => {
    document.title = `${cookie.name}`;
  });
  return (
    <div className="detail">
      {cookie && ( // if there is cookie show its data
        <>
          <h5>{cookie.name}</h5>
          <img src={cookie.image} alt="cookie" />
          <p>{cookie.price} KD</p>
          <p>{cookie.description}</p>
        </>
      )}
    </div>
  );
}

export default Detail;
