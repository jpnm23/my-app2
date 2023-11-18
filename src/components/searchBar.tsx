import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

export default function InputWithIcon(props:{handle:(event: {
  target: {
      value: React.SetStateAction<string>;
  };
}) => void}) {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <TextField
        onChange={props.handle}
        id="input-with-icon-searchfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{borderBottom:"none"}}>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </Box>
  );
}