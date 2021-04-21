import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import color from '../../assets/color/color'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '300px',
        margin: '0 auto',
    },
    margin: {
        height: theme.spacing(3),
    },
}));


function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
};

const AirbnbSlider = withStyles({
    root: {
        color: '#fff',
        height: 3,
        padding: '13px 0',
    },
    thumb: {
        height: 15,
        color: color.main,
        width: 15,
        backgroundColor: '#fff',
        border: '1px solid white',
        boxShadow: '#ebebeb 0 0px 0px',
        '&:focus, &:hover, &$active': {
            boxShadow: '#ccc 0 0px 0px 0px',
        },
        '& .bar': {
            display: "inline-block", // !important;
        },
        '& .PrivateValueLabel-circle-11': {
            marginTop: '60px'
        }
    },
    active: {},
    track: {
        height: 3,
    },
    rail: {
        color: color.main,
        opacity: 1,
        height: 3,
    },
})(Slider);

function valuetext(value) {
    return `${value}`;
}

function Placeholder(value) {
    if (value[0] > 0 || value[0] < 0) {
        if (value[0] !== 0 && value[1] !== 10000) {
            return 'From ' + value[0] + ' to ' + value[1]
        }
        return 'From ' + value[0]
    }
    if (value[1] > 10000 || value[1] < 10000) {
        if (value[0] !== 0 && value[1] !== 10000) {
            return 'From ' + value[0] + ' to ' + value[1]
        }
        return 'To ' + value[1]
    }
    
    return 'Up to 10000'
}

export default function RangeSlider() {
    const [value, setValue] = useState([2000, 8000]);
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        if (newValue !== value) {
            if (value[0] === 0 && newValue[0] > 200) {
                setValue([0, 10000]);
            } else {
                setValue(newValue);
            }
        }
    };

    return (
        <div className={classes.root}>
            <div className={classes.margin} />
            <Typography gutterBottom>{Placeholder(value)}</Typography>
            <AirbnbSlider
                value={value}
                getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                onChange={handleChange}
                valueLabelDisplay="on"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                min={0}
                max={10000}
                step={100}
                name="range"
            />
        </div>
    );
}