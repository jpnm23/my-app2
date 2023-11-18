'use client';
import * as React from 'react';
import InputWithIcon from './searchBar'
import BuySellButtons from './buySellButtons'
import UsernamesList from './usernamesList'
import MainButton from './mainButton'

import { useState } from 'react';
import UsernamesData from '../Data/avalaibleUsernames.json'
import AddPrice from './addPrice';
import { Alert, Snackbar } from '@mui/material';

function Usernames() {
 const [avalibaleUsernames,setAvalibaleUsernames] = useState(UsernamesData.availableUsernames);
 const [ownedUsernames,setownedUsernames] = useState(UsernamesData.ownedUsernames);
 const [searchQuery, setSearchQuery] = useState('');
 const [selectedIndex, setSelectedIndex] = React.useState<number | undefined>();
 const [isSelected, setIsSelected] = useState(false);
 const [price,setPrice] = useState('')
 const [showAddPrice, setShowAddPrice] = useState(false);
 const [active, setActive] = useState("buy");
 const handleSearch = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setSearchQuery(event.target.value);
};
let filteredData = avalibaleUsernames;
const [open, setOpen] = useState(false);
const [openSuccess, setOpenSuccess] = useState(false);

const handleToasterClick = () => {
  setOpen(true);
};
const handleToasterSuccessClick = () => {
  setOpenSuccess(true);
};

const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
};
const handleCloseSuccess = (event?: React.SyntheticEvent | Event, reason?: string) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpenSuccess(false);
};

if (searchQuery) {
  filteredData = avalibaleUsernames.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
}
  return (
    <div>
        <h1>Buy & Sell Usernames</h1>
        <p>Personal, Business and Community presence.</p>
        <BuySellButtons active={active} setActive={setActive} setSelectedIndex={setSelectedIndex} setIsSelected={setIsSelected} setShowAddPrice={setShowAddPrice}/>
        <InputWithIcon handle={handleSearch}/>
        {active==="buy" && <UsernamesList list={filteredData} active={active} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>}
        {active==="sell" && showAddPrice ===false && <UsernamesList list={ownedUsernames} active={active} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>}
        {showAddPrice && <AddPrice price={price} setPrice={setPrice} list={ownedUsernames} active={active} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>}
        <MainButton handleToasterSuccessClick={handleToasterSuccessClick} setownedUsernames={setownedUsernames} handleToasterClick={handleToasterClick} price={price} title={active} list={avalibaleUsernames} ownedList={UsernamesData.ownedUsernames} setAvalibaleUsernames={setAvalibaleUsernames} nextTitile="Next" selectedIndex={selectedIndex} isSelected={isSelected} setSelectedIndex={setSelectedIndex} setIsSelected={setIsSelected} setShowAddPrice={setShowAddPrice} setActive={setActive} showAddPrice={showAddPrice}/>
        <Snackbar open={open}   anchorOrigin={{ vertical:'top', horizontal:'center' }} autoHideDuration={6000} onClose={handleClose}>
					<Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
           Error!
					</Alert>          
				</Snackbar>
        <Snackbar open={openSuccess}   anchorOrigin={{ vertical:'top', horizontal:'center' }} autoHideDuration={6000} onClose={handleCloseSuccess}>
					<Alert onClose={handleCloseSuccess} severity='success' sx={{ width: '100%' }}>
          Success!
					</Alert>          
				</Snackbar>
    </div>
  );
}

export default Usernames;