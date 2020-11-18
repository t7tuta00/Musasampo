import React from 'react';
import { withRouter } from 'react-router-dom';

import GuitarItem from '../../components/guitar-item/guitar-item.component';

import './guitartuner-page.styles.scss';

import GUITAR_DATA from './guitar.data.js';


export const GuitarOverview = (props) => (
    <div className='album-page'>
        <h2 className='title'>Guitar Tuner</h2>
        <div className='items'>

            {guitars.map((guitar, index) => (
                <GuitarItem key={guitar.guitarId} guitar={guitar} routeName={"guitartuner"} />
            ))}

        </div>
    </div>
);

const guitars = GUITAR_DATA;

export default withRouter(GuitarOverview);