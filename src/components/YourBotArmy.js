import React from "react";

function YourBotArmy( {myBotArmy} ) {
  //your bot army code here...
  console.log(myBotArmy)
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
