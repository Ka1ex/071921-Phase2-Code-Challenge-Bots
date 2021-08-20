import React from "react";
import BotCard from './BotCard'
function BotCollection({ bots, clickHandler}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map(bot => <BotCard id={bot.id} bot={bot} clickHandler={clickHandler} />)}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
