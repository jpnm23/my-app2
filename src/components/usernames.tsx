'use client';
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/Button';
import InputWithIcon from './searchBar'
import BuySellButtons from './buySellButtons'
import UsernamesList from './usernamesList'
import MainButton from './mainButton'

import { useState } from 'react';
import avalaibleUsernamesData from '../Data/avalaibleUsernames.json'

function Usernames() {
 const [avalibaleUsernames,setAvalibaleUsernames] = useState(avalaibleUsernamesData.availableUsernames);
 const [searchQuery, setSearchQuery] = useState('');
 const [active, setActive] = useState("buy");
 const handleSearch = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setSearchQuery(event.target.value);
};
let filteredData = avalibaleUsernames;


if (searchQuery) {
  filteredData = avalibaleUsernames.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
}
  return (
    <div>
        <h1>Buy & Sell Usernames</h1>
        <p>Personal, Business and Community presence.</p>
        <BuySellButtons active={active} setActive={setActive}/>
        <InputWithIcon handle={handleSearch}/>
        <UsernamesList list={filteredData}/>
        <MainButton title={active} />
    </div>
  );
}

export default Usernames;