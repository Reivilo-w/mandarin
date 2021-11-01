import React, { useState } from "react";

const Party = (params) => {
  const [user, setUser] = useState({});
  const partyUuid = params.match.params.uuid;

  console.log(partyUuid);
  return (
    <section className="party">
      <h1>Party</h1>
    </section>
  );
};

export default Party;
