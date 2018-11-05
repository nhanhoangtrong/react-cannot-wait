import React from 'react';
import styled from 'styled-components';

import logo from '../logo.svg';

const Title = styled.a`
    font-size: 16px;
    font-weight: 400;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    text-decoration: none;

    &:hover, &:active, &:focus {
        
    }
`;

const ReactLogo = styled.img`
    width: 2.5em;
    margin-left: -0.5em;
`;

const LogoRenderer = ({ classes, children }) => {
    return (
        <Title className={classes} href="/">
            <ReactLogo src={logo} />
            {children}
        </Title>
    );
};

export default LogoRenderer;
