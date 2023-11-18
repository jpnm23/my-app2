import * as React from 'react';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";


export default function MainButton(props:{title: string,nextTitile: string, selectedIndex:number | undefined, isSelected:boolean,setIsSelected:React.Dispatch<React.SetStateAction<boolean>>, setShowAddPrice:React.Dispatch<React.SetStateAction<boolean>>, setActive:React.Dispatch<React.SetStateAction<string>>,showAddPrice:boolean,setSelectedIndex:React.Dispatch<React.SetStateAction<number | undefined>>}) {
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
 useEffect(()=>{
   if(props.title==="sell" && props.selectedIndex !== undefined)
   {
    props.setIsSelected(true)
   }
 },[props.selectedIndex])
  return (
    <Button 
        sx={ roundedButton } 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={()=>{if (props.title === "buy") {return} if(props.isSelected) {props.setShowAddPrice(true); props.setActive('sell'); props.setIsSelected(false)}else{props.setShowAddPrice(false); props.setActive('sell'); props.setSelectedIndex(undefined)}}}
    >
         {props.isSelected && !props.showAddPrice ? props.nextTitile : props.title}
  </Button>
  );
}