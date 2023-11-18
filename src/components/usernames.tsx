'use client';
import * as React from 'react';
import InputWithIcon from './searchBar'
import BuySellButtons from './buySellButtons'
import UsernamesList from './usernamesList'
import MainButton from './mainButton'

import { useState } from 'react';
import UsernamesData from '../Data/avalaibleUsernames.json'
import AddPrice from './addPrice';

function Usernames() {
 const [avalibaleUsernames,setAvalibaleUsernames] = useState(UsernamesData.availableUsernames);
 const [searchQuery, setSearchQuery] = useState('');
 const [selectedIndex, setSelectedIndex] = React.useState<number | undefined>();
 const [isSelected, setIsSelected] = useState(false);
 const [showAddPrice, setShowAddPrice] = useState(false);
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
        <BuySellButtons active={active} setActive={setActive} setSelectedIndex={setSelectedIndex} setIsSelected={setIsSelected} setShowAddPrice={setShowAddPrice}/>
        <InputWithIcon handle={handleSearch}/>
        {active==="buy" && <UsernamesList list={filteredData} active={active} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>}
        {active==="sell" && showAddPrice ===false && <UsernamesList list={UsernamesData.ownedUsernames} active={active} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>}
        {showAddPrice && <AddPrice list={UsernamesData.ownedUsernames} active={active} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>}
        <MainButton title={active} nextTitile="Next" selectedIndex={selectedIndex} isSelected={isSelected} setSelectedIndex={setSelectedIndex} setIsSelected={setIsSelected} setShowAddPrice={setShowAddPrice} setActive={setActive} showAddPrice={showAddPrice}/>
    </div>
  );
}

export default Usernames;