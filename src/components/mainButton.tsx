import * as React from 'react';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';

export default function MainButton(props: {
	title: string;
	nextTitile: string;
	selectedIndex: number | undefined;
	isSelected: boolean;
	setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
	setShowAddPrice: React.Dispatch<React.SetStateAction<boolean>>;
	setActive: React.Dispatch<React.SetStateAction<string>>;
	showAddPrice: boolean;
	setSelectedIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
	list: { name: string; price: string }[];
  ownedList:{ name: string; price: string }[];
	setAvalibaleUsernames: React.Dispatch<
		React.SetStateAction<
			{
				name: string;
				price: string;
			}[]
		>
	>;
	price: string;
}) {
	const [isHover, setIsHover] = useState(false);

	const roundedButton = {
		borderRadius: 55,
		height: '50px',
		width: '90%',
		// background:"linear-gradient(rgba(250,0,0,0.5),transparent)",
		background: isHover ? 'lightblue' : 'linear-gradient(to bottom right, #5252c8, #b48089)',
		backgroundColor: isHover ? 'lightblue' : '#5252c8' /*this your primary color*/,
	};

	const handleMouseEnter = () => {
		setIsHover(true);
	};
	const handleClick = () => {
		if (props.title === 'buy') {
			return;
		}
		if (props.isSelected) {
			props.setShowAddPrice(true);
			props.setActive('sell');
			props.setIsSelected(false);
		} else {
			const newUserName = { name: props.ownedList.filter((item, index) => index === props.selectedIndex)[0].name, price:props.price };
      props.list.push(newUserName)
      props.setAvalibaleUsernames(props.list)
			props.setShowAddPrice(false);
			props.setActive('buy');
			props.setSelectedIndex(undefined);
		}
	};
	const handleMouseLeave = () => {
		setIsHover(false);
	};
	useEffect(() => {
		if (props.title === 'sell' && props.selectedIndex !== undefined) {
			props.setIsSelected(true);
		}
	}, [props.selectedIndex]);
	return (
		<Button
			sx={roundedButton}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={() => {
				handleClick()
			}}>
			{props.isSelected && !props.showAddPrice ? props.nextTitile : props.title}
		</Button>
	);
}
