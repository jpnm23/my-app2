import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from "react";
import { Grid } from '@mui/material';



const bottonContainer = {
  justifyContent: 'center',
  alignItems: 'center',
}

export default function BuySellButtons(props:{active:string,setActive:React.Dispatch<React.SetStateAction<string>>}) {
  const {active,setActive}=props
 
  const handleClick = (event: { target: { id: React.SetStateAction<string>; }; }) => {
    setActive(event.target.id);
  }

  const roundedButtonBuy = {
    borderRadius: 55,
    width: '128px',
    color: active === "buy" ? 'white': "#666666",
    backgroundColor:active === "buy" ? "#454545": '#222222',
  }
  const roundedButtonSell = {
    borderRadius: 55,
    width: '128px',
    color: active === "sell" ? 'white': "#666666",
    backgroundColor:active === "sell" ? "#454545": '#222222',
  }



  return (
        <Grid sx={bottonContainer} >
            <Button 
              sx={ roundedButtonBuy } 
              onClick={(e)=>handleClick(e as any)}
              
              id={"buy"}
            >
              Buy
            </Button>

            <Button sx={ roundedButtonSell } 
              onClick={(e)=>handleClick(e as any)}
              id={"sell"}
            >
              Sell
            </Button>
        </Grid>
  );
}