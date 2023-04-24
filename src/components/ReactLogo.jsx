import React from 'react';
import '../styles/ReactLogo.css';
import Logo from '../assets/react.svg';

const ReactLogo = (tall, anch, opac) => {
    return (
        <figure >
            <img src={Logo} class="react-logo" alt='React logo' style={(
                {width: {tall},
                height: {anch},
                opacity: {opac}
                }
            )
            }></img>
        </figure>
    );
}

export default ReactLogo;