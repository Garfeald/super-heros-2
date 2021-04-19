import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { startSerching, startSerchingDetails } from '../../redux/actions';
import './Search.scss';

export const Search = () => {

    const { supers } = useSelector(state => state.supers)

    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    const history = useHistory();

    const onInputChange = (e) => {
        setInputValue(e.target.value)
        dispatch(startSerching(e.target.value))
    }

    const moveToDetails = (e, value) => {
        history.push(`/details/:${value}`)
        const isSuper = supers.filter((x) => x.name === value)
        dispatch(startSerchingDetails(isSuper[0].id))
    }

    return (
        <div className="block-search">
            <h1 className="title">Search</h1>
            <Autocomplete
                filterOptions={(option) => option}
                onChange={(event, value) => moveToDetails(event, value)}
                freeSolo
                options={supers.map((option) => option.name)}
                className="autocomplete"
                renderInput={(params) => (
                <TextField 
                    {...params} 
                    onChange={onInputChange}
                    value={inputValue}
                    label="InputName" 
                    margin="normal" 
                    variant="outlined" 
                    className="text-field"
                />
                )}
            />
        </div>
    )
}