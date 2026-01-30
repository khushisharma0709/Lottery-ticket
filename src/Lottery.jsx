import { useState } from "react";

import { genTicket,sum } from "./Helper";
import Ticket from "./Ticket";

export default function Lottery({n=3,winingSum=15}){

    let [ticket,setTicket]=useState(genTicket(n));
    let isWinning=sum(ticket)===winingSum;

    let buyTicket=()=>{
        setTicket(genTicket(n));
    };

    return(
        <div>
            <h1>Lottery Ticket!!</h1>
            <Ticket ticket={ticket}/>
            
             <button onClick={buyTicket}> Buy new Ticket </button>
            <h3>{isWinning && "Congratulations,you won"}</h3>
           
        </div>
    );
}