import React from 'react';
import {Link} from 'react-router-dom';

const classes = {
    nav: {
        color: 'white',
        display: 'flex',
        justifyContent: 'space-evenly',
        fontSize: '1rem',
        alignItems: 'center',
        fontFamily: 'Roboto Mono'

    },
   
    p: {
        textDecoration: 'none',
        color: 'white'
    }
}

export default function Nav(props) {
    return (
        <div style={classes.nav}>
                <Link to='/login' style={classes.p}>LOG IN</Link>
                <h2 style={classes.logo}>GAMENAME</h2>
                <Link to='/signup' style={classes.p}>SIGN UP</Link>
        </div>
    )
}