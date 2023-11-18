import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from "react";


export default function MainButton(props:{title: string}) {
    const [isHover, setIsHover] = useState(false);

    const roundedButton = {
        borderRadius: 55,
        height:'50px',
        width:'90%',
        // background:"linear-gradient(rgba(250,0,0,0.5),transparent)",
        background: isHover ? 'lightblue' : 'linear-gradient(to bottom right, #5252c8, #b48089)',
        backgroundColor: isHover ? 'lightblue' : '#5252c8' /*this your primary color*/
      }

   const handleMouseEnter = () => {
      setIsHover(true);
   };

   const handleMouseLeave = () => {
      setIsHover(false);
   };

  return (
    <Button 
        sx={ roundedButton } 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
        {props.title}
  </Button>
  );
}