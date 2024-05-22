import React from "react";
import "./card.css";
import Equilibrium from "/images/image-equilibrium.jpg";
import Etherium from "/images/icon-ethereum.svg";
import Clock from "/images/icon-clock.svg";
import Avatar from "/images/image-avatar.png";

export default function Card() {
  return (
    <div className="container">
      <img className="equilibrium_img" src={Equilibrium} alt="photo" />
      <h1 className="tittle">Equilibrium #3429</h1>
      <p className="text">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="info_container">
        <div className="eth">
          <img src={Etherium} alt="ethereum" />
          <span>0.041 ETH</span>
        </div>
        <div className="clock">
          <img src={Clock} alt="clock" />
          <span>3 days left</span>
        </div>
      </div>
      <div className="avatar">
        <img src={Avatar} alt="avatar" />
        <p>
          Creation of <span>Jules Wyvern</span>
        </p>
      </div>
    </div>
  );
}
