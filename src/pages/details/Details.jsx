import { CardMedia, CircularProgress } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { Spinner } from '../../helpers/Spinner.jsx';
import './Details.scss';

export const Details = () => {

    const { details } = useSelector(state => state.supers)

    return (
        <div className="block-details">
            <h1 className="title">Details</h1>
            {JSON.stringify(details) !== "{}"
            ? 
                <div className="block-details__info">
                    <CardMedia image={details.image.url} title={details.name} className="info-image"/>
                    <div className="block-details__text">
                        <p className="details-text">Name: {details.name}</p>
                        <p className="details-text">Race: {details.appearance.race}</p>
                        <p className="details-text">Gender: {details.appearance.gender}</p>
                        <p className="details-text">Occupation: {details.work.occupation}</p>
                        <p className="details-text">Base: {details.work.base}</p>
                    </div>
                </div>
            :   
                <Spinner className="spinner"/>
            }
        </div>
    )
}