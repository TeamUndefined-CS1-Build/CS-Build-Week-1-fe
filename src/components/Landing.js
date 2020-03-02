import React from 'react';
import Nav from './Nav';
import Button from '@material-ui/core/Button';

const classes = {
    container: {
        height: '100vh',
        textAlign: 'left',
        transition: '0.5s',
        background: 'linear-gradient(rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.95)), url(https://images.unsplash.com/photo-1553986782-9f6de60b51b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1632&q=80)'
    },
    top: {

    },
    header: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: '3rem',
        marginTop: '250px',
        marginLeft: '200px',
        width: '500px'
    },
    desc: {
        marginLeft: '200px',
        color: 'white',
        fontStyle: 'italic',
        textTransform: 'uppercase',
        opacity: '0.5'
    },
    button: {
        marginLeft: '200px',
        width: '150px',
        marginTop: '20px',
        fontSize: '1rem',
        background: 'none',
        color: 'white',
        border: '1px solid grey'
    }
}

export default function Landing(props) {
    return (
        <div className='fade-in'>
            <div style={classes.container}>
                <Nav />
                <section style={classes.top}>
                    
                <h1 style={classes.header}>Lorem Ipsum</h1>
                <p style={classes.desc}>blah blah blah. blah blah</p>
                <Button onClick={() => props.history.push('/login')}variant="contained" style={classes.button}>Dive In</Button>
                </section>
            </div>
        </div>
    )
}
