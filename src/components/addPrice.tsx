import * as React from 'react';
import { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { FormControl, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';

export default function AddPrice(props: { list: { name: string, price: string }[], active:string,selectedIndex:number | undefined, setSelectedIndex: React.Dispatch<React.SetStateAction<number | undefined>>,price: string,setPrice: React.Dispatch<React.SetStateAction<string>> }) {
  
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    props.setSelectedIndex(index);
  };

  return (
    // <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <div>
      <Divider />
      <List aria-label="usernames list" sx={{ display: "inline-block", width: "90%", marginBottom:4 }}>
        {props.list.filter((item, index)=>index === props.selectedIndex).map((item, index) => <ListItemButton
          selected={props.selectedIndex === index}
          sx={{ justifyContent: "space-between" }}
        >
          <ListItemText primary={item.name} secondary={
            <Typography variant="body2" style={{ color: '#2a81aa' }}>
              {`€${props.price}`}
            </Typography>
          } sx={{ display: "contents" }} />
        </ListItemButton>)}
      </List>
      <label>Choose the proce to sell it</label>
      <FormControl fullWidth sx={{ m:1 }}>
          <OutlinedInput
            id="outlined-adornment-amount"   
            type='number'    
            startAdornment={<InputAdornment position="start">EUR</InputAdornment>}
            onChange={(e)=>{props.setPrice(e.target.value)}}
          />
        </FormControl>
    </div>
    /* </Box> */
  );
}