import React from 'react';
import {useSelector} from "react-redux";
import './ThunkTable.scss';
import {Spinner} from "../../helpers/Spinner";

export const ThunkTable = () => {
    const { details } = useSelector(state => state.supers)
    return (
        <div className="block-table">
            {
                details.length > 1
                    ?   <table>
                        <thead>
                        <tr>
                            <th><h2>Image</h2></th>
                            <th><h2>Name</h2></th>
                            <th><h2>Gender</h2></th>
                            <th><h2>Race</h2></th>
                        </tr>
                        </thead>
                        <tbody>
                        {details.map((detail) => (
                                    <tr key={detail.id}>
                                        <th><img src={detail.image.url} alt="imag" className="table-image"/></th>
                                        <th>{detail.name}</th>
                                        <th>{detail.appearance.gender}</th>
                                        <th>{detail.appearance.race}</th>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                    :  <Spinner className="spinner" />
            }
        </div>
    );
}