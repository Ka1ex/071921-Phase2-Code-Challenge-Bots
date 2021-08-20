import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import {useState, useEffect} from 'react'

function BotsPage() {
  //start here with your code for step one

  

const API = 'http://localhost:8002/bots'
const [bots, setBots] = useState([])

useEffect(() => {
  fetch(API)
  .then(res => res.json())
  .then(resData => setBots(resData))
  
}, [])

const [botID, SetBotID] = useState("")
const [myBotArmy, setMyBotArmy] = useState([])
let armyBot = bots.filter(armyBot => armyBot.id === botID)

let clickHandler = (id) => {
 SetBotID(id)
 setMyBotArmy({...myBotArmy, botID})
}

console.log(myBotArmy)
  return (
    <div>
      <YourBotArmy myBotArmy={myBotArmy}/>
      <BotCollection bots={bots} clickHandler={clickHandler}/>
    </div>
  )
}

export default BotsPage;
