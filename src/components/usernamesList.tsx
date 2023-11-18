import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';

export default function UsernamesList(props: { list: { name: string, price: string }[], active:string,selectedIndex:number | undefined, setSelectedIndex: React.Dispatch<React.SetStateAction<number | undefined>> }) {

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
      <List aria-label="usernames list" sx={{ display: "inline-block", width: "90%" }}>
        {props.list.map((item, index) => <ListItemButton
          selected={props.selectedIndex === index}
          onClick={(event) => handleListItemClick(event, index)}
          sx={{ justifyContent: "space-between" }}
        >
          <ListItemText primary={item.name} secondary={
            <Typography variant="body2" style={{ color: '#2a81aa' }}>
              {props.active ==='buy' && `€${item.price}`}
            </Typography>
          } sx={{ display: "contents" }} />
        </ListItemButton>)}
      </List>
    </div>
    /* </Box> */
  );
}