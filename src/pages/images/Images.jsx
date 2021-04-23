import React from 'react';
import './images.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CardMedia } from '@material-ui/core';
import { startSerchingDetails, startSerching } from '../../redux/actions';
import { Spinner } from '../../helpers/Spinner.jsx'



export const Images = () => {

    const randomNumbers = (max) => Math.floor(Math.random() * Math.floor(max));

    const { supers } = useSelector(state => state.supers);

    const history = useHistory();

    const dispatch = useDispatch();

    const showDetails = (id) => {
        const curName = supers.filter((item) => item.id === id)
        history.push(`/details/:${curName[0].name}`)
        dispatch(startSerchingDetails(id))
    }

    const refreshSupers = () => {
        let alphabet = 'abcdefghijklmnopqrstuvwxyz';
		let word = '';
		for(let i = 0; i < 1; i++){
			word += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
		}
        dispatch(startSerching(word))
    }
    
    return (
        <>
            <div className="block-image">
                <h1 className="title" >SuperHeros</h1>
                {
                    supers.length > 0 
                    ? supers.map((hero) => 
                        <CardMedia 
                            image={hero.image.url} 
                            title={hero.name} 
                            className="image" 
                            key={hero.id} 
                            onClick={() => showDetails(hero.id)}
                        />) 
                    : <Spinner className="spinner"/>
                }
                <button aria-label="add" className="fab" onClick={refreshSupers}>ShowMore</button>
            </div>
        </>
    )
    
    
}