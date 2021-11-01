import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  return (
    <section className="home">
      <h1>Mandarin's Game</h1>
      <Link className="button" to={`/party/${uuidv4()}`}>
        Create party
      </Link>
      <div className="join-party">
        <input type="text" />
        <button className="">Join party</button>
      </div>
    </section>
  );
};

export default Home;
