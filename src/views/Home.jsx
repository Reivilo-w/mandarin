import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import ApplicationContext from "../ApplicationContext";

const Home = () => {
  const context = useContext(ApplicationContext);
  const socket = context.socket;
  const history = useHistory();

  const createParty = () => {
    if (socket.connected) {
      socket.emit("createParty", (response) => {
        console.log(response);
        if (!response.status) {
          alert(response.message);
          return;
        }

        history.push(`/party/${response.data.party.uuid}`);
      });
    }
  };

  return (
    <section className="home">
      <h1>Mandarin's Game</h1>
      <button
        onClick={() => {
          createParty();
        }}
      >
        Create Party
      </button>
      <div className="join-party">
        <input type="text" />
        <button>Join party</button>
      </div>
    </section>
  );
};

export default Home;
