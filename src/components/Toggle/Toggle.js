import React, { useContext } from 'react';
import { ThemeContext } from '../../context';
import './Toggle.css'

const Toggle = () => {
    const theme = useContext(ThemeContext);

    const handleClick = () => {
      theme.dispatch({ type: "TOGGLE" });
    };
    return (
        <div className='toggle'>

            <img src="https://toppng.com/uploads/preview/sun-icon-free-download-png-and-vector-sun-icon-11562902365ry8jqdxl5e.png" alt="" className="toggle-icon" />


            <img src="https://flyclipart.com/thumb2/moon-png-icon-free-download-62123.png" alt="" className="toggle-icon" />
            <div
                className="toggle-button"
                onClick={handleClick}
                style={{left: theme.state.darkMode ? 0 : 25}}
            ></div>
        </div>
    );
};

export default Toggle;