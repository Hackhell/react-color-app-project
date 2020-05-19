import React from 'react'
import { withStyles } from '@material-ui/core/styles';

const styles = {
    main: {
        backgroundColor: 'purple',
        border: '3px solid teal',
    },
    secondary: {
        backgroundColor: 'teal',
        '& h1': {
            color: 'white',
            '& span': {
                backgroundColor: 'green'
            },
        
        },
        
    }
}
function MiniPalette(props) {
    const {classes} = props;
    console.log(classes);

    return (
        <div className={classes.main}>
            <h2>Mini Palette</h2>
            <section className={classes.secondary}>
                <h1>HEllo!! <span>dksdskfs</span></h1>
                <span>uhhhkhkhkkk</span>
            </section>
        </div>

        
    )
}

export default withStyles(styles)(MiniPalette);