import React from 'react';
import { useHistory } from 'react-router';
import './Main.scss'
import { useDispatch } from 'react-redux';
import { startSerching } from '../../redux/actions';


export const Main = () => {

	const dispatch = useDispatch()

	const history = useHistory();

	const moveToImages = () => {
		history.push('/images')
		let alphabet = 'abcdefghijklmnopqrstuvwxyz';
		let word = '';
		for(let i = 0; i < 1; i++){
			word += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
		}
		dispatch(startSerching(word))
	}

	const moveToSearch = () => {
		history.push('/search')
	}

	return (
	<>
		<div className="block-button">
			<button onClick={moveToImages} className="button">ShowSuperHerosImages</button>
			<button  onClick={moveToSearch} className="button">ShowSuperHerosSearch</button>
		</div>
	</>
	)
};